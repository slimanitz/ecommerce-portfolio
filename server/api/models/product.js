const mongoose = require('mongoose');
// eslint-disable-next-line no-unused-vars
const mongoClient = require('../../config/database');

const productSchema = new mongoose.Schema(
  {
    name: { type: String },
    category: { type: mongoose.Schema.Types.ObjectId, ref: 'category' },
    quantity: { type: Number },
    price: { type: mongoose.Schema.Types.Decimal128 },
    pics: [{ type: String }],

  },
  { timestamps: true },
);

const Product = mongoose.model('product', productSchema);

module.exports = Product;
