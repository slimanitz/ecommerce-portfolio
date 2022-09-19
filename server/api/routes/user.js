const express = require('express');
const {
  create, get, getAll, update, remove, login, signup,
} = require('../controllers/user');

const router = express.Router();

router.post('/', create);
router.get('/:id', get);
router.get('/', getAll);
router.patch('/:id', update);
router.delete('/:id', remove);
router.post('/login', login);
router.post('/signup', signup);

module.exports = router;
