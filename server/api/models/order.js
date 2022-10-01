const mongoose = require('mongoose');
// eslint-disable-next-line no-unused-vars
const mongoClient = require('../../config/database');

const orderSchema = new mongoose.Schema(
  {
    date: { type: Date, default: Date.now },
    totalPrice: { type: mongoose.Decimal128 },
    orderContent: { type: String },

  },
  { timestamps: true },
);

const Order = mongoose.model('order', orderSchema);

module.exports = Order;
