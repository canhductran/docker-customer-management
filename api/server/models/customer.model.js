var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var CustomerSchema = new Schema({
	name: {type: String, required: true},
	telephone: {type: String, required: true, unique: true}
});

module.exports = mongoose.model("Customer", CustomerSchema);