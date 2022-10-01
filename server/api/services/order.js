const httpStatus = require('http-status');
const Joi = require('joi');
const Order = require('../models/order');
const APIError = require('../../utils/api-error');

const schema = Joi.object({
  date: Joi.date(),
  totalPrice: Joi.number().required(),
  orderContent: Joi.string().required(),
  customerId: Joi.string().required(),

});

const create = async (order) => {
  const { error, value } = schema.validate(order);
  if (error) throw new APIError({ message: error.message, status: httpStatus.BAD_REQUEST });
  const newOrder = new Order(value);
  await newOrder.save();
  return newOrder;
};

const get = async (id) => {
  const order = await Order.findById(id);
  if (!order) throw new APIError('No order found', httpStatus.NOT_FOUND);
  return order;
};

const getAll = async () => {
  const orders = await Order.find();
  return orders;
};

const update = async (id, payload) => {
  const { error, value } = schema.validate(payload);
  if (error) throw new APIError({ message: error.message, status: httpStatus.BAD_REQUEST });
  const updatedValue = await Order.findByIdAndUpdate(id, value);
  if (!updatedValue) throw new APIError('Not Found', httpStatus.NOT_FOUND);
  return updatedValue;
};

const remove = async (id) => {
  const order = await get(id);
  if (!order) throw new APIError('No such order', httpStatus.NOT_FOUND);
  await Order.findByIdAndDelete(id);
};

module.exports.orderService = {
  create,
  get,
  getAll,
  update,
  remove,
};
