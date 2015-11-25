var mongoose = require('mongoose');

var schema = new mongoose.Schema({
	username: {
		type: String,
		default: ''
	},
	password: {
		type: String,
		default: ''
	},
  admin: {
    type: Boolean,
    defualt: false
  }
});

module.exports = mongoose.model('User', schema);
