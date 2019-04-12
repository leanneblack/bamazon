var mysql = require("mysql");
var inquirer = require("inquirer");

var connection = mysql.createConnection({
  host: "localhost",

  // Your port; if not 3306
  port: 3306,

  // Your username
  user: "root",

  // Your password
  password: "",
  database: "bamazon_DB"
});

connection.connect(function(err) {
  if (err) throw err;
  console.log("WELCOME TO BAMAZON Pet Store. Here are our items:");
  showItems();
});

function showItems() {
  connection.query("SELECT * FROM items", function(err, res) {
    if (err) throw err;
    for (let i = 0; i < res.length; i++) {
      console.log("Item Number: " + res[i].item_id);
      console.log("Item Name: " + res[i].item_name);
      console.log("Price: $" + res[i].price);
    }
    makePurchase();
  });
}

let makePurchase = () => {
  inquirer
    .prompt([
      {
        type: "input",
        name: "item_id",
        message: "Choose an item to purchase by entering the item number!"
      },
      {
        type: "input",
        name: "quantity",
        message: "How much of this item would you like to purchase?"
      }
    ])

    .then(function(makePurchase) {
      let item = makePurchase.item_id;
      let quantity = makePurchase.quantity;

      let sql = "SELECT * FROM items WHERE ?";
      connection.query(
        sql,
        {
          item_id: item
        },
        function(err, res) {
          if (err) throw err;
          if (res.length === 0) {
            console.log(
              "Not a Valid item id, please insert valid item from list"
            );
            showItems();
          } else {
            let itemDetails = res[0];
            if (quantity <= itemDetails.stock_quantity) {
              console.log(
                itemDetails.item_id +
                  "is availible for purchase! Getting your order ready! \n"
              );
              let updatesql =
                "UPDATE items SET stock_quantity = " +
                (itemDetails.stock_quantity - quantity);
              connection.query(updatesql, function(err, data) {
                if (err) throw err;
                console.log(
                  "Yay! Your order was placed successfully.\n" +
                    "Your total is $" +
                    itemDetails.price * quantity +
                    "\n Thanks for visiting and shopping at Bamazon!"
                );
                connection.destroy();
              });
            } else {
              console.log(
                "Our apologies, we do not have the " +
                  itemDetails.item_name +
                  " availible to purchase." +
                  " Change your order or select a new item. \n"
              );
              showItems();
            }
          }
        }
      );
    });
};
