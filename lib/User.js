(function() {

// grab the mongoose module
var mongoose = require('mongoose'),
  Schema = mongoose.Schema


var UserSchema = new Schema({
  id : {type : String, required: true},
  email : {type : String},
  books : [{type: Schema.Types.ObjectId}]
});

// module.exports allows us to pass this to other files when it is called
module.exports = mongoose.model('User', UserSchema);

})();





