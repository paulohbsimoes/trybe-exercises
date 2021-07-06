const axios = require('axios');

const getJokes = async () => {
  try {
    const { data } = await axios.get('https://sv443.net/jokeapi/v2/joke/Programming?blacklistFlags=nsfw,religious,political,racist,sexist&type=single');
    return data;
  } catch (error) {
    console.log(error);
  }
}

module.exports = {
  getJokes
}
