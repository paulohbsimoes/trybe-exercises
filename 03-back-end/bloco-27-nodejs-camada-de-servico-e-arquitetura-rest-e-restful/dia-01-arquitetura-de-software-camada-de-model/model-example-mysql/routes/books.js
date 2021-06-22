const express = require('express');
const route = express.Router();
const Book = require('../models/Book');

route.get('/', async (req, res) => {
  const { author_id } = req.query;
  if (author_id) {
    const result = await Book.getByAuthorId(author_id);
    return res.json(result);
  }
  const result = await Book.getAll();
  res.json(result);
});

route.get('/:id', async (req, res) => {
  const { id } = req.params;
  const result = await Book.getById(id);
  if (!result.length) return res.json({ message: 'Not found' });
  res.json(result);
})

route.post('/', async(req, res) => {
  const isBookValid = await Book.isValid(req.body);
  if (!isBookValid) {
    return res.status(400).json({ message: 'Dados inválidos' });
  }
  await Book.create(req.body);
  res.status(201).json({ message: 'Livro criado com sucesso!'});
});

module.exports = route;
