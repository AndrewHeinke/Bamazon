// First Display All of the Items available for sale. This initial display, should include the ids, names, and prices of products for sale
//
// Users should then be prompted with two messages. The first message should ask them the ID of the product they would like to buy. The second message should ask them how many of the product they would like to buy.

var mysql = require('mysql');
var inquirer = require('inquirer');

var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root", //Your username
    password: "", //Your password
    database: "Bamazon"
});

connection.connect(function(err) {
    if (err) throw err;
    console.log("connected as id " + connection.threadId);
});

connection.query('SELECT * FROM Products', function(err, res) {
    for (var i = 0; i < res.length; i++) {
        console.log(res[i].ItemID + " | " + res[i].ProductName + " | " + res[i].DepartmentName + " | " + res[i].Price + " | " + res[i].StockQuantity);
    }
    console.log("-----------------------------------");
});
