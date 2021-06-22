const fetch = require('node-fetch');

const getCep = async (cep) => {
  const URL = `https://viacep.com.br/ws/${cep}/json/`;
  return fetch(URL).then((response) => response.json());
}

module.exports = {
  getCep
}
