// modules =================================================
var mongoose       = require('mongoose');
var calculator     = require('./lib/');
//var mongo          = require('mongodb').MongoClient;
var assert         = require('assert');
//var _              = require('underscore');
// configuration ===========================================
	
// config files
var dbconfig = require('./config/db');

mongoose.connect(dbconfig.url);

var Schema = mongoose.Schema;

var UserSchema = new Schema({
  id : {type : String, required: true},
  email : {type : String},
  books : [{type: Schema.Types.ObjectId}]
});


var User = mongoose.model('User', UserSchema);

User.find({}, 'books', function (err, users) {
  assert.equal(null, err);

  var top100 = calculator(users);

  console.log(top100);
  process.exit();
});
