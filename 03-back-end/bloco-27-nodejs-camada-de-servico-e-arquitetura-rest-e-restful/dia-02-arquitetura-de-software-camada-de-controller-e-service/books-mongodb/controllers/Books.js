const BookServices = require('../services/Books');

const getAll = async (req, res) => {
  const { author_id } = req.query;

  let result;
  if (author_id) {
    result = await BookServices.getByAuthorId(Number(author_id));
  } else {
    result = await BookServices.getAll();
  }

  res.json(result);
}

const getById = async (req, res) => {
  const { id } = req.params;
  const result = await BookServices.getById(id);
  if (!result) return res.json({ message: 'Not found' });
  res.json(result);
}

const create = async(req, res, next) => {
  const { title, authorId } = req.body;
  const result = await BookServices.create({ title, authorId });
  if (result.err) return next(result);
  res.status(201).json({ message: 'Livro criado com sucesso!'});
}

module.exports = {
  getAll,
  getById,
  create
}
