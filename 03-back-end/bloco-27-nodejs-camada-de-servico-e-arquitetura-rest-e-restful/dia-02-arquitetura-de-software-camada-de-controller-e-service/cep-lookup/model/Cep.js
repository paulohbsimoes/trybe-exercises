const connection = require('./connection');
const saveMe = require('../utils/saveMe');

const getCep = async (cep) => {
  const query = 'SELECT * FROM ceps WHERE cep = ?';
  const [result] = await connection.execute(query, [ cep ]);
  return result[0] || null;
}

const getAll = async () => {
  const query = 'SELECT * FROM ceps';
  const [result] = await connection.execute(query);
  return result;
}

const create = saveMe(async({ cep, logradouro, bairro, localidade, uf }) => {
  const query = 'INSERT INTO ceps (cep, logradouro, bairro, localidade, uf) '
   + 'VALUES (?, ?, ?, ?, ?)';
  await connection.execute(query, [
    cep, logradouro, bairro, localidade, uf
  ]);
  return { cep, logradouro, bairro, localidade, uf };
});

module.exports = {
  getCep,
  create,
  getAll
}
