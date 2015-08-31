// modules =================================================
var mongoose       = require('mongoose');
var calculator     = require('./calculator');
// configuration ===========================================
	
// config files
var db = require('./config/db');

var port = process.env.PORT || 8080; // set our port
mongoose.connect(db.url); // connect to our mongoDB database

console.log(calculator(mongoose));

process.exit();
