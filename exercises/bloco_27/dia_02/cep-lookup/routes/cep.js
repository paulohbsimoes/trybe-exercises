const express = require('express');
const router = express.Router();
const CepController = require('../controllers/Cep');
const middlewares = require('../middlewares');

router.get('/:cep', CepController.getCep);
router.get('/', CepController.getAll)
router.post('/', middlewares.validateCep, CepController.create);

module.exports = router;
