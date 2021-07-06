const JokeModel = require('../models/JokeModel');

const listJokes = async (_req, res) => {
  const { joke } = await JokeModel.getJokes();
  res.render('jokeView', { joke });
}

module.exports = {
  listJokes
}
