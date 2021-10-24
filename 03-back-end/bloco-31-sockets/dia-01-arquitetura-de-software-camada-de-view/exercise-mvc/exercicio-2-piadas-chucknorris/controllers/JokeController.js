const JokeModel = require('../models/JokeModel');

const getCategories = async (_req, res) => {
  const categories = await JokeModel.getCategories();
  res.render('jokes/index', { categories })
}

const getRandomJoke = async (_req, res) => {
  const { value: joke } = await JokeModel.getRandomJoke();
  res.render('jokes/joke', { joke })
}

const getRandomJokeByCategory = async (req, res) => {
  const { category } = req.params;
  const { value: joke } = await JokeModel.getRandomJokeByCategory(category);
  res.render('jokes/joke', { joke })
}

module.exports = {
  getCategories,
  getRandomJoke,
  getRandomJokeByCategory
}
