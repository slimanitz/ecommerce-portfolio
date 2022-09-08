const express = require('express');
require('express-async-errors');
const router = require('../api/routes');
const { errorHandler } = require('../middlewares/error');

const app = express();
app.use(express.json());
app.use('/api', router);
app.use(errorHandler);

module.exports = app;
