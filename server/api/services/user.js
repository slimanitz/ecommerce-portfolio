const httpStatus = require('http-status');
const Joi = require('joi');
const User = require('../models/user');
const APIError = require('../../utils/api-error');

const schema = Joi.object({
  fullName: Joi.string().required(),
  email: Joi.string().required(),

});

const create = async (user) => {
  const { error, value } = schema.validate(user);
  if (error) throw new APIError('Bad Payload', httpStatus.BAD_REQUEST);
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
  if (error) throw new APIError('Bad Payload', httpStatus.BAD_REQUEST);
  await get(id);
  const updateCode = await User.updateOne({ _id: id }, { ...value });
  if (!updateCode.ok) throw new APIError('Not Found', httpStatus.NOT_FOUND);
  const updatedValue = await User.findById(id);
  return updatedValue;
};

const remove = async (id) => {
  const user = await get(id);
  if (!user) throw new APIError('No such user', httpStatus.NOT_FOUND);
  await User.findByIdAndDelete(id);
};

module.exports.userService = {
  create,
  get,
  getAll,
  update,
  remove,
};
