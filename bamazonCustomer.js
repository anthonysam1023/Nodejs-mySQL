const mysql = require("mysql");
const inquirer = require("inquirer");
const Table = require("cli-table");

const dbConnnectionSettings = {
    host: "localhost",
    user: "root",
    port: 3306,
    password: 'Osttos6!',
    database: "bamazon"
};

const connection = mysql.createConnection(dbConnnectionSettings);

connection.connect(function (error) {
    if (error) throw error;

    displayTable();
});

function displayTable() {

    connection.query(

        "SELECT * FROM products",

        function (error, results) {
            if (error) throw error;

            let table = new Table({
                head: ["Item ID", "Product Name", "Price", "Quantity"],
                colWidths: [15, 25, 15, 15]
            });
            for (i = 0; i < results.length; i++) {
                table.push(
                    [results[i].item_id,
                    results[i].product_name,
                    results[i].price,
                    results[i].stock_quantity]
                );
            }
            console.log(table.toString());
            purchase();
        }
    );
}

function purchase(){
    inquirer
    .prompt([
        {
            type: "input",
            message:"What would you like to purchase?(type the id number)",
            name: "id"

        },
        {
            type: "number",
            message: "How many do you want to purchase?",
            name: "quantity"
        },

    ])

    .then(function(answers){
        let purchaseRequest = answers.id;
        let amount = answers.quantity;

        order(purchaseRequest,amount);
    });
};

    function order(purchaseID, purchaseQuantity) {
    connection.query(
      "Select * FROM products WHERE ?",
        [
          {
            item_id: purchaseID
          }
        ],
      function(error, results) {
        if (error) throw error;
        if (purchaseQuantity <= results[0].stock_quantity) {
          let totalCost = results[0].price * purchaseQuantity;
          let remainingStock =  results[0].stock_quantity - purchaseQuantity;
          console.log("\nWe have that in stock.\n");
          console.log("\nYour total comes to " + totalCost + ".  Your order will be shipped quickly.\n");
          console.log("\nUpdating " + results[0].product_name + " quantities...\n");
          connection.query(
            "UPDATE products SET ? WHERE ?",
              [
                {
                  stock_quantity: remainingStock
                },
                {
                  item_id: purchaseID
                }
              ],
            function(error, results) {
              if (error) throw error;
            }
          );
        } else {
          console.log("\nInsufficient stock on to handle your purchase request.\n");
        };
      connection.end();
    });
   };