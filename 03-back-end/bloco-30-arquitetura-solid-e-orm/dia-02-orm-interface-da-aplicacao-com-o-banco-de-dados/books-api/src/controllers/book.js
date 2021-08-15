const rescue = require('express-rescue');
const BookService = require('../services/book');

const sortMethods = {
  title: ({ title: titleA }, { title: titleB }) => titleA.localeCompare(titleB),
  author: ({ author: authorA }, { author: authorB }) => authorA.localeCompare(authorB),
  date: ({ createdAt: dateA }, { createdAt: dateB }) => dateA.getTime() - dateB.getTime(),
};

const getAll = rescue(async (req, res) => {
  const { author, sort } = req.query;

  let result = null;

  if (author) {
    result = await BookService.getByAuthor(author);
  } else {
    result = await BookService.getAll();
  }

  if (sort && sortMethods[sort]) {
    result.sort(sortMethods[sort]);
  }

  return res.json(result);
});

const getById = rescue(async (req, res) => {
  const { id } = req.params;
  const book = await BookService.getById(id);
  if (!book) return res.status(404).json({ message: 'Book not found' });
  return res.json(book);
});

const create = rescue(async (req, res) => {
  const book = await BookService.create(req.body);
  res.status(201).json(book);
});

const update = rescue(async (req, res) => {
  const { id } = req.params;
  await BookService.update(id, req.body);
  const result = await BookService.getById(id);
  res.json(result);
});

const remove = rescue(async (req, res) => {
  const { id } = req.params;
  await BookService.remove(id);
  res.sendStatus(204);
});

module.exports = {
  getAll,
  getById,
  create,
  update,
  remove,
};
