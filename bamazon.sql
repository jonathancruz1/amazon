CREATE DATABASE Bamazon;

USE Bamazon;

CREATE TABLE products (
	item_id INT NOT NULL PRIMARY KEY, 
	product_name VARCHAR(50),
	department_name VARCHAR(50),
	price DECIMAL(10, 2),
	stock_quantity INT
);

INSERT INTO products(item_id, product_name, department_name, price, stock_quantity)
VALUES ("1", "Fire TV Stick", "Electronics", 39.99, 400);
INSERT INTO products(item_id, product_name, department_name, price, stock_quantity)
VALUES ("2", "Exquizon LCD Video Projector", "Electronics", 69.99, 300);
INSERT INTO products(item_id, product_name, department_name, price, stock_quantity)
VALUES ("3", "Sony Playstation 4", "Electronics", 279.99, 500);
INSERT INTO products(item_id, product_name, department_name, price, stock_quantity)
VALUES ("4", "Microsoft Xbox One", "Electronics", 269.99, 500);
INSERT INTO products(item_id, product_name, department_name, price, stock_quantity)
VALUES ("5", "Nintendo Switch", "Electronics", 395.77, 200);
INSERT INTO products(item_id, product_name, department_name, price, stock_quantity)
VALUES ("6", "BOSS Men's Polo Shirt", "Clothing, Shoes & Jewelry", 70, 3);
INSERT INTO products(item_id, product_name, department_name, price, stock_quantity)
VALUES ("7", "Nautica Men's Neck Sweater", "Clothing, Shoes & Jewelry", 124.93, 50);
INSERT INTO products(item_id, product_name, department_name, price, stock_quantity)
VALUES ("8", "Oculus Touch", "Electronics", 99.99, 100);
INSERT INTO products(item_id, product_name, department_name, price, stock_quantity)
VALUES ("9", "Madden NFL 17", "Video Games", 29.98, 200);
INSERT INTO products(item_id, product_name, department_name, price, stock_quantity)
VALUES ("10", "NHL 17", "Video Games", 39.19, 200);
