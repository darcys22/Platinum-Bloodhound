(function() {

  module.exports = function(mongoose) {

    // Function to return a query within a collection that is not created in this app
    function find (collec, query, callback) {
      mongoose.connection.db.collection(collec, function (err, collection) {
        collection.find(query).toArray(callback);
      });
    }

    var collectionName = "books";

    var cb = function (err, docs) {
      return "hello"
    };

    find(collectionName, {}, cb);

  };

})();
