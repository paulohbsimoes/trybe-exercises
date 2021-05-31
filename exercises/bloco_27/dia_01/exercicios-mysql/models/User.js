const connection = require('./connection');

const isValid = ({ firstName, lastName, email, password }) => {
  const errors = [];
  if (!firstName) errors.push('O campo "firstname" é obrigatório.');
  if (!lastName) errors.push('O campo "lastName" é obrigatório.');
  if (!email) errors.push('O campo "email" é obrigatório.');
  if (email && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email)) {
    errors.push('O "email" deve estar no formato email@email.com.');
  }
  if (!password) errors.push('O campo "password" é obrigatório.');
  if (password && password.length < 6) errors.push('O "password" deve ter no mínimo 6 caracteres.');
  return { error: errors.length ? errors : null };
}

const addUser = async ({ firstName, lastName, email, password }) => {
  const query = 'INSERT INTO users (first_name, last_name, email, password) VALUES (?, ?, ?, ?)';
  const { insertId } = connection.execute(query, [ firstName, lastName, email, password ]);
  return { id: insertId, firstName, lastName, email, password };
}

const getUsers = async () => {
  const query = 'SELECT * FROM users';
  const [result] = connection.execute(query);
  return result;
}

const getUserById = async (id) => {
  const query = 'SELECT id, first_name, last_name, email FROM users WHERE id = ?';
  const [result] = connection.execute(query, [ id ]);
  if (!result.length) return null;
  return result;
}

const editUser = async (id, userData) => {
  const { firstName, lastName, email } = userData;
  try {
    const query = 'UPDATE users SET first_name = ?, lastName = ?, email = ? WHERE id = ?';
    connection.execute(query, [ firstName, lastName, email, id ]);
    return true;
  } catch (error) {
    console.log(error);
    return false;
  }
}

module.exports = {
  addUser,
  isValid,
  getUsers,
  getUserById,
  editUser
}
