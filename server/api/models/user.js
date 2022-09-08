const mongoose = require('mongoose');
// eslint-disable-next-line no-unused-vars
const mongoClient = require('../../config/database');

const userSchema = new mongoose.Schema(
  {
    fullName: { type: String },
    email: { type: String },
    orders: [{ type: String }],

  },
  { timestamps: true },
);

const User = mongoose.model('users', userSchema);

module.exports = User;
