// modules =================================================
var mongoose       = require('mongoose');
var library        = require('./lib/');
var assert         = require('assert');
// configuration ===========================================
	
mongoose.connect(library.config.db.url);

var User = library.User;
var Book = library.Book;

User.find({}, 'books', function (err, users) {
  assert.equal(null, err);

  var top100 = library.calculator(users);

  console.log(top100);
  process.exit();
});
