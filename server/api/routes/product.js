const express = require('express');
const multer = require('multer');
const storage = require('../../config/storage');
const {
  create, get, getAll, update, remove,
} = require('../controllers/product');

const multiUpload = multer({
  storage,
  limits: { fileSize: 1 * 1024 * 1024 }, // 1MB
});

const router = express.Router();

router.post('/', multiUpload.array('pics', 10), create);
router.get('/:id', get);
router.get('/', getAll);
router.patch('/:id', update);
router.delete('/:id', remove);

module.exports = router;
