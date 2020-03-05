const express = require('express');
const router = express.Router({mergeParams: true});

const customersController = require('../controllers/customers.controller');

//Get a list of Customers.
router.route('/')
    .get(customersController.getCustomers);

//Create a Customer record.
router.route('/')
    .post(customersController.postCustomer);

module.exports = router;