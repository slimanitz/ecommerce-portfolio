const mongoose = require('mongoose');
// eslint-disable-next-line no-unused-vars
const mongoClient = require('../../config/database');

const userSchema = new mongoose.Schema(
  {
    fullName: { type: String },
    email: { type: String, unique: true },
    orders: [{ type: String, default: [] }],

  },
  { timestamps: true },
);

const User = mongoose.model('users', userSchema);

module.exports = User;
