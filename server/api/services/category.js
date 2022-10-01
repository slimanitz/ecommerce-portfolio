const httpStatus = require('http-status');
const Joi = require('joi');
const Category = require('../models/category');
const APIError = require('../../utils/api-error');

const schema = Joi.object({
  name: Joi.string().required(),

});

const create = async (category) => {
  const { error, value } = schema.validate(category);
  if (error) throw new APIError('Bad Payload', httpStatus.BAD_REQUEST);
  const newCategory = new Category(value);
  await newCategory.save();
  return newCategory;
};

const get = async (id) => {
  const category = await Category.findById(id);
  if (!category) throw new APIError('No category found', httpStatus.NOT_FOUND);
  return category;
};

const getAll = async () => {
  const categorys = await Category.find();
  return categorys;
};

const update = async (id, payload) => {
  const { error, value } = schema.validate(payload);
  if (error) throw new APIError('Bad Payload', httpStatus.BAD_REQUEST);
  const updatedValue = await Category.findByIdAndUpdate(id, value);
  if (!updatedValue) throw new APIError('Not Found', httpStatus.NOT_FOUND);
  return updatedValue;
};

const remove = async (id) => {
  const category = await get(id);
  if (!category) throw new APIError('No such category', httpStatus.NOT_FOUND);
  await Category.findByIdAndDelete(id);
};

module.exports.categoryService = {
  create,
  get,
  getAll,
  update,
  remove,
};
