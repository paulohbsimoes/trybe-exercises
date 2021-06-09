const connection = require('./connection');
const Author = require('./Author');

const getAll = async () => {
  const SQL = 'SELECT * FROM books';
  const [result] = await connection.execute(SQL);
  return result;
}

const getByAuthorId = async (authorId) => {
  const SQL = 'SELECT * FROM books WHERE author_id = ?';
  const [result] = await connection.execute(SQL, [authorId]);
  return result;
}

const getById = async (bookId) => {
  const SQL = 'SELECT * FROM books WHERE id = ?';
  const [result] = await connection.execute(SQL, [bookId]);
  return result;
}

const isValid = async (newBook) => {
  if (!newBook.title || newBook.title.length < 3) return false;
  if (!newBook.authorId) return false;
  const search = await Author.getByAuthorId(newBook.authorId);
  if (!search.length) return false; 
  return true;
}

const create = async ({ authorId, title }) => {
  const SQL = 'INSERT INTO books (title, author_id) VALUES (?, ?)';
  const [result] = await connection.execute(SQL, [title, authorId]);
  return result;
}

module.exports = {
  getAll,
  getByAuthorId,
  getById,
  isValid,
  create
}
