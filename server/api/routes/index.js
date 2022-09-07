const express = require('express');
require('express-async-errors');
const user = require('./user');
const product = require('./product');
// __IMPORT__

const router = express.Router();
router.use('./users', user);
router.use('./products', product);
// __ROUTE__

module.exports = router;
