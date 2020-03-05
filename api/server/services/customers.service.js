const {Customer} = require('../models/customer.model');

/**
 * Service method to get a collection of Customers that match a phone number.
 * @param {*} phone Phone number
 */
const getCustomers = async (phone) => {
    const regexp = new RegExp(`^${phone}`);
    const customers = await Customer.find({'phone': regexp});
    
    return customers;
};

/**
 * Service method to create a Customer record.
 * @param {*} name Name of the customer
 * @param {*} phone Phone number of the customer
 */
const postCustomer = async (name, phone) => {
    console.log(name);
    console.log(phone);

    let customer = new Customer({ 
        name: name,
        phone: phone
    });
    
    try {
        customer = await customer.save();
    } catch (exception) {
        console.error(exception);
        customer = null;
    }

    return customer;
};

module.exports = {
    getCustomers,
    postCustomer
};