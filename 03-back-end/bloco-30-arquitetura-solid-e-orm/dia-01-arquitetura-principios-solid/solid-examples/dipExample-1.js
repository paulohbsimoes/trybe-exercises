const fetch = require('node-fetch');

const url = 'https://icanhazdadjoke.com';

const requestWithFetch = () => {
  fetch(url, {
    headers: new fetch.Headers({
      Accept: 'application/json',
    }),
  })
    .then((response) => response.json())
    .then((data) => console.log(data.joke))
    .catch((err) => console.log(err));
};

const getJokes = (numberOfJokes) => {
  for (let i = 0; i < numberOfJokes; i += 1) requestWithFetch();
};

getJokes(5);

module.exports = { getJokes };
