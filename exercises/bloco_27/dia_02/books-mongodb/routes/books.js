const express = require('express');
const router = express.Router();
const BooksController = require('../controllers/Books');

router.get('/', BooksController.getAll);
router.get('/:id', BooksController.getById)
router.post('/', BooksController.create);

module.exports = router;
