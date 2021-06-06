const connection = require('./connection');
const { ObjectId } = require('mongodb');

const serialize = ({ _id, authorId, title }) => ({
  id: _id,
  authorId,
  title
})

const getAll = async () => {
  const db = await connection();
  const books = await db.collection('books').find().toArray();
  return books.map(serialize);
}

const getByAuthorId = async (authorId) => {
  if (!ObjectId.isValid(authorId)) return null;

  const db = await connection();

  const books = await db.collection('books')
    .find({ authorId })
    .toArray();

  return books.map(serialize);
}

const getById = async (bookId) => {
  if (!ObjectId.isValid(bookId)) return null;
  const db = await connection();
  const book = await db.collection('books').findOne({ _id: ObjectId(bookId) });
  return serialize(book);
}

const create = async ({ authorId, title }) => {
  const db = await connection();
  const result = await db.collection('books').insertOne({ authorId, title });
  return serialize(result.ops[0]);
}

module.exports = {
  getAll,
  getByAuthorId,
  getById,
  create
}
