const httpStatus = require('http-status');
const Joi = require('joi');
const Product = require('../models/product');
const APIError = require('../../utils/api-error');

const schema = Joi.object({
  name: Joi.string().required(),
  category: Joi.string().required(),
  quantity: Joi.number().required(),
  price: Joi.number().required(),

});

const create = async (product) => {
  const { error, value } = schema.validate(product);
  if (error) throw new APIError('Bad Payload', httpStatus.BAD_REQUEST);
  const newProduct = new Product(value);
  await newProduct.save();
  return newProduct;
};

const get = async (id) => {
  const product = await Product.findById(id);
  if (!product) throw new APIError('No product found', httpStatus.NOT_FOUND);
  return product;
};

const getAll = async () => {
  const products = await Product.find();
  return products;
};

const update = async (id, payload) => {
  const { error, value } = schema.validate(payload);
  if (error) throw new APIError('Bad Payload', httpStatus.BAD_REQUEST);
  const updatedValue = await Product.findByIdAndUpdate(id, value);
  if (!updatedValue) throw new APIError('Not Found', httpStatus.NOT_FOUND);
  return updatedValue;
};

const remove = async (id) => {
  const product = await get(id);
  if (!product) throw new APIError('No such product', httpStatus.NOT_FOUND);
  await Product.findByIdAndDelete(id);
};

module.exports.productService = {
  create,
  get,
  getAll,
  update,
  remove,
};
