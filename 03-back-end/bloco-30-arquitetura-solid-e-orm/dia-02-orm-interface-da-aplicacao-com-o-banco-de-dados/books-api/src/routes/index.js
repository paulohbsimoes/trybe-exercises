const express = require('express');

const rootRouter = express.Router();
const bookRouter = require('./book');

rootRouter.use('/books', bookRouter);

module.exports = rootRouter;
