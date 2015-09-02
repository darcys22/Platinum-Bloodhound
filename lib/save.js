(function() {
  var mongoose = require('mongoose');

  /*
   * Bulk-upsert an array of records
   * @param  {Array}    records  List of records to update
   * @param  {Model}    Model    Mongoose model to update
   * @return {Promise}  always resolves a BulkWriteResult
   */
  module.exports = function (records, Model){
    var match = '_id';
    return new Promise(function(resolve, reject){
      var bulk = Model.collection.initializeUnorderedBulkOp();
      records.forEach(function(record){
        var query = {};
        query[match] = mongoose.Types.ObjectId(record[match]);
        delete record._id;
        bulk.find(query).upsert().updateOne( {$set: record} );
      });
      bulk.execute(function(err, bulkres){
          if (err) return reject(err);
          resolve(bulkres);
      });
    });
  }

})();
