DROP DATABASE IF EXISTS bamazon_DB;
CREATE DATABASE bamazon_DB;

USE bamazon_DB;

CREATE TABLE items
(
  item_id int NOT NULL
  AUTO_INCREMENT,
  item_name VARCHAR
  (100) NULL,
  item_department VARCHAR
  (100) NULL,
  price DECIMAL
  (10,2) NULL,
  stock_quantity INT NULL,
  PRIMARY KEY
  (item_id)
);

  INSERT INTO items
    (item_name, item_department, price, quantity)
  VALUES
    ("Dog Food" ,"Dog" ,65 ,120);

  INSERT INTO items
    (item_name, item_department, price, quantity)
  VALUES
    ("Dog Treats" ,"Treats" ,14 ,100);

  INSERT INTO items
    (item_name, item_department, price, quantity)
  VALUES
    ("Leather Leash" ,"Leashes" ,36 ,50);

  INSERT INTO items
    (item_name, item_department, price, quantity)
  VALUES
    ("Leather Collar" ,"Collars" ,24 ,50);

  INSERT INTO items
    (item_name, item_department, price, quantity)
  VALUES
    ("Cat Food" ,"Cat" ,40 ,120);

  INSERT INTO items
    (item_name, item_department, price, quantity)
  VALUES
    ("CatNip" ,"Treats" ,12 ,100);

  INSERT INTO items
    (item_name, item_department, price, quantity)
  VALUES
    ("Mouse" ,"Cat Toys" ,3 ,100);

  INSERT INTO items
    (item_name, item_department, price, quantity)
  VALUES
    ("Kong Toy" ,"Dog Toys" ,12 ,20);

  INSERT INTO items
    (item_name, item_department, price, quantity)
  VALUES
    ("Ball" ,"Dog Toys" ,6 ,20);

  INSERT INTO items
    (item_name, item_department, price, quantity)
  VALUES
    ("Tug Toy Rope" ,"Dog Toys" ,8 ,20);

  SELECT
    *
  FROM
    bamazon_DB.items;





