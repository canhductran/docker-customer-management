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

    //Validate phone query parameter has the valid length
    if (!phone || phone.length > 11) {
        return res.status(400).send({error: 'Cannot search customers with more than 11 digits'});
    }

    //Validate if phone query parameter is a number
    if (!/^\d+$/.test(phone)) {
        return res.status(400).send({error: 'Cannot search customers with non numeric value'});
    }

    let customers;

    try {
        customers = await customersService.getCustomers(phone);
    } catch (error) {
        console.error(error);
        return res.status(422).send({error: 'An unexpected error happened. Please try again'});        
    }
    
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

    //Validate customer details
    if (error) {
        return res.status(400).send(error.details[0].message);
    }

    const name = req.body.name;
    const phone = req.body.phone;

    let customer;

    try {
        customer = await customersService.postCustomer(name, phone);
    } catch (error) {
        console.error(error);

        //If the error is duplicated key, it means that this phone number already exists. Return a different message
        if (error.name === 'MongoError' && error.code === 11000) {
            return res.status(422).send({error: 'A customer with the same phone number already exists!'});
        }

        return res.status(422).send({error: 'An unexpected error happened. Please try again'});        
    }

    res.send(customer);
};

module.exports = {
    getCustomers,
    postCustomer
};