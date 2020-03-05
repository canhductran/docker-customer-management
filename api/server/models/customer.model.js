const mongoose = require("mongoose");

const Schema = mongoose.Schema;
const Joi = require('joi');

const CustomerSchema = new Schema({
	name: {
		type: String,
		required: true,
		minlength: 5,
		maxlength: 50
	},
	phone: {
		type: String,
		required: true,
		unique: true,
		minlength: 11,
		maxlength: 11,
	}
});

/**
 * Validate details of a Customer.
 * @param {*} customer 
 */
const validateCustomer = (customer) => {
	const schema = {
		name: Joi.string().min(5).max(50).required(),
		phone: Joi.string().min(11).max(11).required()
	}

	return Joi.validate(customer, schema);
}

module.exports = {
	Customer: mongoose.model("Customer", CustomerSchema),
	validate: validateCustomer
}