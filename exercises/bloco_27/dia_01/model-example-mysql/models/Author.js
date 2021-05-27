const connection = require('./connection');

const serialize = (author) => ({
  id: author.id,
  firstName: author.first_name,
  middleName: author.middle_name,
  lastName: author.last_name,
});

const addFullName = (author) => {
  const { firstName, middleName, lastName } = author;
  const fullName = [firstName, middleName, lastName].filter((name) => name).join(' ');
  return {
    ...author,
    fullName
  }
}

const getAll = async () => {
  const SQL = 'SELECT id, first_name, middle_name, last_name FROM authors';
  const [authors] = await connection.execute(SQL);
  return authors.map(serialize).map(addFullName);
}

const getByAuthorId = async (authorId) => {
  const SQL = 'SELECT * FROM authors WHERE id = ?';
  const [authors] = await connection.execute(SQL, [authorId]);
  return authors;
}

module.exports = {
  getAll,
  getByAuthorId
}
