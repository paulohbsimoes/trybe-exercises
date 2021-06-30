const express = require('express');
const plant = require('./plant');

const router = express.Router();

router.use('/plant', plant);

module.exports = router;
