function getDogPicture() {
  return fetch('https://dog.ceo/api/breeds/image/random')
    .then(response => response.json())
    .then(data => data);
}

module.exports = { getDogPicture };
