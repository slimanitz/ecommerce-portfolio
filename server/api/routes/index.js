const express = require('express');
const health = require('./health');
const order = require('./order');
const user = require('./user');
const product = require('./product');
const category = require('./category');
// __IMPORT__

const router = express.Router();
router.use('/ping', health);
router.use('/orders', order);
router.use('/users', user);
router.use('/products', product);
router.use('/categories', category);
// __ROUTE__

module.exports = router;
