/* eslint-disable no-underscore-dangle */
const httpStatus = require('http-status');
const Joi = require('joi');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../models/user');
const APIError = require('../../utils/api-error');
const { jwtSecret } = require('../../config/vars');

const schema = Joi.object({
  fullName: Joi.string().required(),
  email: Joi.string().required(),
  password: Joi.string().required(),
});

const generateToken = (user) => {
  // eslint-disable-next-line no-underscore-dangle
  const token = jwt.sign({ id: user._id, email: user.email }, jwtSecret);
  return token;
};

const hashPassword = (password) => {
  const salt = bcrypt.genSaltSync(10);
  const hash = bcrypt.hashSync(password, salt);
  return hash;
};

const loginSchema = Joi.object({
  email: Joi.string().required(),
  password: Joi.string().required(),
});

const create = async (user) => {
  const { error, value } = schema.validate(user);
  if (error) {
    throw new APIError({
      message: error.message,
      status: httpStatus.BAD_REQUEST,
    });
  }
  value.password = hashPassword(user.password);
  const newUser = new User(value);
  await newUser.save();
  return newUser;
};

const signup = async (user) => {
  const { error, value } = schema.validate(user);
  if (error) {
    throw new APIError({
      message: error.message,
      status: httpStatus.BAD_REQUEST,
    });
  }
  if (await User.findOne({ email: user.email })) throw new APIError({ message: `User with the following email ${user.email} already exists`, status: httpStatus.UNAUTHORIZED });
  value.password = hashPassword(user.password);
  const newUser = new User(value);
  await newUser.save();
  return newUser;
};

const get = async (id) => {
  const user = await User.findById(id);
  if (!user) throw new APIError('No user found', httpStatus.NOT_FOUND);
  return user;
};

const getAll = async () => {
  const users = await User.find();
  return users;
};

const update = async (id, payload) => {
  const { error, value } = schema.validate(payload);
  if (error) {
    throw new APIError({
      message: error.message,
      status: httpStatus.BAD_REQUEST,
    });
  }
  const updatedValue = await User.findByIdAndUpdate(id, value);
  if (!updatedValue) throw new APIError('Not Found', httpStatus.NOT_FOUND);
  return updatedValue;
};

const remove = async (id) => {
  const user = await get(id);
  if (!user) throw new APIError('No such user', httpStatus.NOT_FOUND);
  await User.findByIdAndDelete(id);
};

const login = async (payload) => {
  const { error } = loginSchema.validate(payload);
  if (error) {
    throw new APIError({
      message: error.message,
      status: httpStatus.BAD_REQUEST,
    });
  }
  const user = await User.findOne({ email: payload.email });
  if (!bcrypt.compareSync(payload.password, user.password)) {
    throw new APIError({
      message: 'Wrong credentials',
      status: httpStatus.UNAUTHORIZED,
    });
  }
  return { user, token: generateToken({ id: user._id }) };
};

module.exports.userService = {
  create,
  get,
  getAll,
  update,
  remove,
  login,
  signup,
};
