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

  Book.update({}, {rank: 0, votes: 0}, {multi: true}, function(err) { 
    assert.equal(null, err) 

    library.save(top100, Book).then(function(bulkRes){
      console.log('Bulk complete.');
      process.exit();
    }, function(err){
        console.log('Bulk Error:', err);
        process.exit();
    });
  });

});
