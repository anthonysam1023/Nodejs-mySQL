DROP DATABASE IF EXISTS bamazon;
CREATE DATABASE bamazon;

USE bamazon;

CREATE TABLE products (
  item_id INTEGER(10) NOT NULL AUTO_INCREMENT,
  product_name VARCHAR(100) NOT NULL,
  department_name VARCHAR(45) NOT NULL,
  price INTEGER(10),
  stock_quantity INTEGER(10),
  product_sales INTEGER(10) DEFAULT 0,
  PRIMARY KEY (item_id)
);

INSERT INTO products(product_name, department_name, price, stock_quantity)
    VALUES ("Playing Cards", "games", 30.00, 15);
INSERT INTO products(product_name, department_name, price, stock_quantity)
    VALUES ("Call of Duty", "games", 60.00, 20);
INSERT INTO products(product_name, department_name, price, stock_quantity)
    VALUES ("Phone", "electronics", 400, 10);
INSERT INTO products(product_name, department_name, price, stock_quantity)
    VALUES ("Xbox One", "electronics", 250.00, 30);
INSERT INTO products(product_name, department_name, price, stock_quantity)
    VALUES ("Computer", "electronics", 2000.00, 40);
INSERT INTO products(product_name, department_name, price, stock_quantity)
    VALUES ("Jeans", "clothing", 40.00, 20);
INSERT INTO products(product_name, department_name, price, stock_quantity)
    VALUES ("Hand Towel", "homegoods", 12.00, 20);
INSERT INTO products(product_name, department_name, price, stock_quantity)
    VALUES ("Tshirt", "clothing", 15.00, 40);
INSERT INTO products(product_name, department_name, price, stock_quantity)
    VALUES ("Underwear", "clothing", 10.00, 15);
INSERT INTO products(product_name, department_name, price, stock_quantity)
    VALUES ("Dishes", "homegoods", 20.00, 8);
    
SELECT * FROM products;