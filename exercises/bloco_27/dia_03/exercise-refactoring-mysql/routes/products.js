const express = require('express');
const router = express.Router();
const ProductController = require('../controllers/Product')

router.get('/:id', ProductController.getById);
router.get('/', ProductController.getAll);
router.post('/', ProductController.add);
router.put('/:id', ProductController.update);
router.delete('/:id', ProductController.exclude);

module.exports = router;
