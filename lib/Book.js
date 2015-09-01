(function() {

// grab the mongoose module
var mongoose = require('mongoose'),
  Schema = mongoose.Schema

// define our Book model
var BookSchema = new Schema({
  asin       : {type : String, required: true},
	author     : {type : String},
	blacklist  : {type : Boolean, default: false},
	cover      : {type : String},
	graylist   : {type : Boolean, default: false},
  rank       : {type : Number, default: 0},
	title      : {type : String},
	url        : {type : String},
	votes      : {type : Number, default: 0},

});

// module.exports allows us to pass this to other files when it is called
module.exports = mongoose.model('Book', BookSchema);

})();





