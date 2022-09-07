const httpStatus = require('http-status');
const { orderService } = require('../services/order');

const create = async (req, res) => {
  const neworder = await orderService.create(req.body);
  res.status(httpStatus.OK).json(neworder);
};

const getAll = async (req, res) => {
  const orders = await orderService.getAll();
  res.status(httpStatus.OK).json(orders);
};

const get = async (req, res) => {
  const { id } = req.params;
  const order = await orderService.get(id);
  res.status(httpStatus.OK).json(order);
};

const update = async (req, res) => {
  const { id } = req.params;
  const order = await orderService.update(id, req.body);
  res.status(httpStatus.OK).json(order);
};

const remove = async (req, res) => {
  const { id } = req.params;
  const order = await orderService.remove(id, req.body);
  res.status(httpStatus.OK).json(order);
};

module.exports = {
  create,
  get,
  getAll,
  update,
  remove,
};
