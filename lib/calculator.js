(function() {

  var _ = require('underscore');

  module.exports = function(users) {

    //This guy goes through the users, creates a single array of all the books, counts them, sorts them ad ranks them

    return       _.chain(users)
                  .reduce( function (memo, objek) { return memo.concat(objek.books); }, [])
                  .countBy(_.identity)
                  .map( function(value, key) { return { _id : key, votes : value } })
                  .sortBy(function(item) { return item.votes * -1; } )
                  .first(100)
                  .forEach(function(item, i) { item.rank = (i + 1); } )
                  .value();
  };

})();
