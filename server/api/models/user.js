const mongoose = require('mongoose');
// eslint-disable-next-line no-unused-vars
const mongoClient = require('../../config/database');

const userSchema = new mongoose.Schema(
  {
    fullName: { type: String },
    email: { type: String },
    password: { type: String },
    orders: [{ type: mongoose.Schema.Types.ObjectId, ref: 'orders' }],

  },
  { timestamps: true },
);

const User = mongoose.model('users', userSchema);

module.exports = User;
