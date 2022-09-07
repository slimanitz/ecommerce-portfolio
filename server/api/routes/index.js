const express = require('express');
require('express-async-errors');
const user = require('./user');
const product = require('./product');
const order = require('./order');
// __IMPORT__

const router = express.Router();
router.use('./users', user);
router.use('./products', product);
router.use('./orders', order);
// __ROUTE__

module.exports = router;
