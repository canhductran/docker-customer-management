const {validate} = require('../models/customer.model'); 

const customersService = require('../services/customers.service');

/**
 * Controller method for getting a collection of Customers.
 * Send the matched Customers using response.
 * @param {*} req Request
 * @param {*} res Response
 */
const getCustomers = async function(req, res) {
    const phone = req.query.phone;

    const customers = await customersService.getCustomers(phone);
    
    res.send(customers);
};

/**
 * Controller method for creating a Customer record.
 * Validate the customer details before calling the service method.
 * @param {*} req Request
 * @param {*} res Response
 */
const postCustomer = async function(req, res) {
    const { error } = validate(req.body); 
    if (error) {
        return res.status(400).send(error.details[0].message);
    }

    const name = req.body.name;
    const phone = req.body.phone;

    const customer = await customersService.postCustomer(name, phone);
    
    res.send(customer);
};

module.exports = {
    getCustomers,
    postCustomer
};