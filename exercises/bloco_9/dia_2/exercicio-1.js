const API_URL = 'https://icanhazdadjoke.com/';

const myObject = {
  method: 'GET',
  headers: { 'Accept': 'application/json' }
};

const fetchJoke = async () => {
  const jokeContainer = document.querySelector('#jokeContainer');
  const joke = await fetch(API_URL, myObject)
    .then(data => data.json())
    .then(content => content.joke);
  jokeContainer.textContent = joke;
};

window.onload = () => fetchJoke();