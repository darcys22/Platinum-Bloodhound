// modules =================================================
var mongoose       = require('mongoose');
var calculator     = require('./lib/');
// configuration ===========================================
	
// config files
var db = require('./config/db');


var db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function (callback) {

  console.log(calculator(mongoose));
  process.exit();

});

mongoose.connect(db.url); // connect to our mongoDB database

