const express = require('express');
const route = express.Router();
const Author = require('../models/Author');

route.get('/', async (req, res) => {
  const result = await Author.getAll();
  res.json(result);
});

route.get('/:id', async (req, res) => {
  const { id } = req.params;
  const result = await Author.getByAuthorId(id);
  if (!result.length) return res.json({ message: 'Not found' });
  res.json(result);
});

module.exports = route;
