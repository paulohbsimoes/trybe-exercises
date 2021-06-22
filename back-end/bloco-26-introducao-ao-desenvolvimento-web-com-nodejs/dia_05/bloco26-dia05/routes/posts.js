const express = require('express');
const posts = express.Router();
const middleware = require('../middlewares');

posts.get('/', middleware.posts.getAll);

posts.get('/:id', middleware.posts.getById);

module.exports = posts;
