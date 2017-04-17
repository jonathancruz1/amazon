var mysql = require("mysql");
var inquirer = require("inquirer");

var connection = mysql.createConnection({
    host: 'localhost',
    port: '3000',
    user: 'root',
    password: 'Password123',
    database: 'Bamazon'
});

connection.connect(function(err) {
    if (err) throw err;
    console.log("Welcome to Bamazon!");
    Bamazon_func();
});

function Bamazon_func() {
	inquirer.prompt([{
		name: "name",
		type: "input",
		message: "Enter your name"
	}]).then(function(response){
		console.log("Hello " + response.name + ".");
		Products();
	})
}

function Products() {
	inquirer.prompt([{
		name: "commands",
		type: "list",
		message: "What would you like to do?",
		choices: ["View Products", "Exit"]
	}]).then(function(select){
		if(select.commands === "View Products") {
			
			var query = "SELECT item_id, product_name, price FROM products";
			console.log("\nAvailable Products: " + "\n-----------------------------------------");
			connection.query(query, function(err, results, fields){
				if(err) throw err;
				if(results) {
					for (var i = 0; i < results.length; i++){
						console.log("#" + results[i].item_id + "\tProduct: " + results[i].product_name + "\tPrice: $" + results[i].price);
					}
					console.log("-----------------------------------------------------");
					Action();
				}
				
			});
		} else if(select.commands === "Exit") {
			console.log("Thank you for coming!");
			process.exit();
		}
	});
}

function Action() {
	inquirer.prompt([{
		name: "action",
		type: "list",
		message: "Start Shopping",
		choices: ["Purchase", "Exit"]
	}]).then(function(agree){
		if(agree.action === "Purchase"){
			Purchase();
		} else if(agree.action === "Exit") {
			console.log("Thank you for coming!");
			process.exit();
		}
	});
}

function continueToShop() {
	inquirer.prompt([{
		name: "continueToShop",
		type: "list",
		message: "Continue Shopping?",
		choices: ["Continue", "Exit"]
	}]).then(function(decide) {
		if(decide.continueToShop === "Continue") {
			Products();
		} else {
			console.log("Thank you for coming!");
			process.exit();
		}
	})
}

function Purchase() {
	inquirer.prompt([{
		name: "item",
		type: "input",
		message: "Provide the product ID"
	},
	{
		name: "quantity",
		type: "input",
		message: "Select quantity"
	}
	]).then(function(response){
		connection.query("SELECT * FROM products WHERE item_id = ?", [response.item], function(err, result){
			var total = (result[0].price * response.quantity).toFixed(2);
			if(response.quantity > result[0].stock_quantity) {
				console.log("Sorry, insufficient quantity! Try Again");
				Action();
			} else {
				connection.query("UPDATE products SET stock_quantity= stock_quantity - ? WHERE item_id = ?", [response.quantity, response.item], function(err, result){
					console.log("\n-----------------------------------------------------------------");
					console.log("Your total is: $" + total);
					console.log("-----------------------------------------------------------------");
					continueToShop();
				});
			}
		});
	});
}