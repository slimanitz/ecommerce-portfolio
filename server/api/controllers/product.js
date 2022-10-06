const httpStatus = require('http-status');
const { default: mongoose } = require('mongoose');
const { productService } = require('../services/product');

const create = async (req, res) => {
  const newproduct = await productService.create(req.body, req.files);
  res.status(httpStatus.OK).json(newproduct);
};

const getAll = async (req, res) => {
  const products = await productService.getAll(req.query);
  res.status(httpStatus.OK).json(products);
};

const get = async (req, res) => {
  const { id } = req.params;
  const product = await productService.get(id);
  res.status(httpStatus.OK).json(product);
};

const update = async (req, res) => {
  const { id } = req.params;
  const product = await productService.update(id, req.body);
  res.status(httpStatus.OK).json(product);
};

const remove = async (req, res) => {
  const { id } = req.params;
  const product = await productService.remove(id, req.body);
  res.status(httpStatus.OK).json(product);
};

const bulkGet = async (req, res) => {
  const { productIds } = req.query;
  const products = await productService.bulkGet(JSON.parse(productIds)
    .map(({ _id }) => mongoose.Types.ObjectId(_id)));
  res.status(httpStatus.OK).json(products);
};

module.exports = {
  create,
  get,
  getAll,
  update,
  remove,
  bulkGet,
};
