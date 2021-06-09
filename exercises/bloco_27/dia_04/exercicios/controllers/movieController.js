const MovieService = require('../services/movieService');

const getAll = async (_req, res) => {
  const movies = await MovieService.getAll();

  res.status(200).json(movies);
};

const create = async (req, res) => {
  const { title, directedBy, releaseYear } = req.body;

  const movie = await MovieService
    .create({ title, directedBy, releaseYear });

  if (!movie) {
    return res.status(400).send('Dados inválidos');
  }

  res.status(201).send('Filme criado com sucesso!');
};

const getById = async (req, res) => {
  const { id } = req.params;
  const result = await MovieService.getById(id);
  if (!result) return res.status(404).send('Dados inválidos');
  res.json(result);
};

const remove = async (req, res) => {
  const { id } = req.params;
  const result = await MovieService.remove(id);
  if (result.err) return res.status(400).json(result);
  res.json(result);
};

module.exports = {
  getAll,
  create,
  getById,
  remove
};
