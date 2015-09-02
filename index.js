#!/usr/bin/env node

(function() {

// modules =================================================
var mongoose       = require('mongoose');
var library        = require('./lib/');
var assert         = require('assert');
var CronJob        = require('cron').CronJob;
	
function updateTopBooks(dbUrl, User, Book) {

  mongoose.connect(dbUrl);

  User.find({}, 'books', function (err, users) {

    assert.equal(null, err);

    var top100 = library.calculator(users);

    Book.update({}, {rank: 0, votes: 0}, {multi: true}, function(err) { 
      assert.equal(null, err) 

      library.save(top100, Book).then(function(bulkRes){
        console.log('Bulk complete.');
        mongoose.connection.close()
      }, function(err){
          console.log('Bulk Error:', err);
          mongoose.connection.close()
      });
    });

  });
};
var bookschedule = function(dbUrl, User, Book) {
  //new CronJob('*/5 * * * * *', function() {
  new CronJob('00 30 11 * * *', function() {
      updateTopBooks(dbUrl, User, Book);
  }, null, true, 'America/Los_Angeles');
};

module.exports = bookschedule;

if (!module.parent) {
  bookschedule(process.argv[2]);
}

})();
  
