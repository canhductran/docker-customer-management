const Customer = require('../models/customer.model');

const getCustomers = async (telephoneNumber) => {
    const regexp = new RegExp(`^${telephoneNumber}`);
    const customers = await Customer.find({'telephone': regexp});
    
    return customers;
};

const postCustomer = async (customerName, telephoneNumber) => {
    let customer = new Customer({ 
        name: customerName,
        telephone: telephoneNumber
    });
    
    try {
        customer = await customer.save();
    } catch (exception) {
        customer = null;
    }

    console.log('service postCustomer');
    return customer;
};

module.exports = {
    getCustomers,
    postCustomer
};