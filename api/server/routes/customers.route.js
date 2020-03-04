const express = require('express');
const router = express.Router({mergeParams: true});

const customersController = require('../controllers/customers.controller');

router.route('/')
    .get(customersController.getCustomers);

router.route('/')
    .post(customersController.postCustomer);

module.exports = router;