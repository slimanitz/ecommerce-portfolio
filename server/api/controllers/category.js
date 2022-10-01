const httpStatus = require('http-status');
const { categoryService } = require('../services/category');

const create = async (req, res) => {
  const newcategory = await categoryService.create(req.body);
  res.status(httpStatus.OK).json(newcategory);
};

const getAll = async (req, res) => {
  const categorys = await categoryService.getAll();
  res.status(httpStatus.OK).json(categorys);
};

const get = async (req, res) => {
  const { id } = req.params;
  const category = await categoryService.get(id);
  res.status(httpStatus.OK).json(category);
};

const update = async (req, res) => {
  const { id } = req.params;
  const category = await categoryService.update(id, req.body);
  res.status(httpStatus.OK).json(category);
};

const remove = async (req, res) => {
  const { id } = req.params;
  const category = await categoryService.remove(id, req.body);
  res.status(httpStatus.OK).json(category);
};

module.exports = {
  create,
  get,
  getAll,
  update,
  remove,
};
