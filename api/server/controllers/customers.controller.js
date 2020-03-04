const customersService = require('../services/customers.service');

const getCustomers = async function(req, res) {
    const telephoneNumber = req.query.customerTelephoneNumber;

    let customers = await customersService.getCustomers(telephoneNumber);
    
    res.send(customers);
};

const postCustomer = async function(req, res) {
    const customerName = req.body.customerName;
    const customerTelephoneNumber = req.body.customerTelephoneNumber;

    let customer = await customersService.postCustomer(customerName, customerTelephoneNumber);
    
    console.log('controller postCustomer');
    console.log(customer);
    res.send(customer);
};

module.exports = {
    getCustomers,
    postCustomer
};