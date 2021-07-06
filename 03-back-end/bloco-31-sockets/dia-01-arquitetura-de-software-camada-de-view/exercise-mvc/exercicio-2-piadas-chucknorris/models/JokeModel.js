const axios = require('axios');

const getCategories = async () => {
  const URL = 'https://api.chucknorris.io/jokes/categories';
  const { data } = await axios.get(URL);
  return data;
}

const getRandomJoke = async () => {
  const URL = 'https://api.chucknorris.io/jokes/random';
  const { data } = await axios.get(URL);
  return data;
}

const getRandomJokeByCategory = async (category) => {
  const URL = `https://api.chucknorris.io/jokes/random?category=${category}`
  const { data } = await axios.get(URL);
  return data;
}

module.exports = {
  getCategories,
  getRandomJoke,
  getRandomJokeByCategory
}
