const MoviesModel = require('../models/movieModel');

const getNewMovie = (movieData) => {
  const { id, title, directedBy, releaseYear } = movieData;

  return { id, title, directedBy, releaseYear };
};

const isValid = (title, directedBy, releaseYear) => {
  if (!title || typeof title !== 'string') return false;
  if (!releaseYear || typeof releaseYear !== 'number') return false;
  if (!directedBy || typeof directedBy !== 'string') return false;

  return true;
};

const getAll = async () => {
  const moviesData = await MoviesModel.getAll();

  return moviesData.map(getNewMovie);
};

const create = async ({ title, directedBy, releaseYear }) => {
  const isMovieValid = isValid(title, directedBy, releaseYear);

  if (!isMovieValid) return false;

  const { id } = await MoviesModel.create({ title, directedBy, releaseYear });

  return {
    id,
  };
};

const getById = async (movieId) => MoviesModel.getById(movieId);

const remove = async (movieId) => {
  const movie = await MoviesModel.remove(movieId);

  if (!movie) return {
    err: {
      code: 'badRequest',
      message: 'Não foi possível remover o filme'
    }
  }

  return movie;
};

module.exports = {
  create,
  getAll,
  getById,
  remove
};
