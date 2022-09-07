const express = require('express');
require('express-async-errors');
const product = require('./product');
const order = require('./order');
const user = require('./user');
// __IMPORT__

const router = express.Router();
router.use('/products', product);
router.use('/orders', order);
router.use('/users', user);
// __ROUTE__

module.exports = router;
