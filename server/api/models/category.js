const mongoose = require('mongoose');
// eslint-disable-next-line no-unused-vars
const mongoClient = require('../../config/database');

const categorySchema = new mongoose.Schema(
  {
    name: { type: String },

  },
  { timestamps: true },
);

const Category = mongoose.model('category', categorySchema);

module.exports = Category;
