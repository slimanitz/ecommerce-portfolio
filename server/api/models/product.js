const mongoose = require('mongoose');
// eslint-disable-next-line no-unused-vars
const mongoClient = require('../../config/database');

const productSchema = new mongoose.Schema(
  {
    name: { type: String },
    category: { type: String },
    quantity: { type: Number },
    price: { type: mongoose.Schema.Types.Decimal128 },
    pics: [{ type: String }],

  },
  { timestamps: true },
);

const Product = mongoose.model('products', productSchema);

module.exports = Product;
