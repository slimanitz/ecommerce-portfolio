const express = require('express');
require('express-async-errors');
const user = require('./user');
// __IMPORT__

const router = express.Router();
router.use('./users', user);
// __ROUTE__

module.exports = router;
