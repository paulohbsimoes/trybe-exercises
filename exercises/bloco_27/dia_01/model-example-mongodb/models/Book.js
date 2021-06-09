const connection = require('./connection');
const Author = require('./Author');
const { ObjectId } = require('mongodb');

const getAll = async () => {
  const db = await connection();
  const books = await db.collection('books').find().toArray();
  return books;
}

const getByAuthorId = async (authorId) => {
  if (!ObjectId.isValid(authorId)) return null;
  const db = await connection();
  const books = await db.collection('books').find({ author_id: authorId }).toArray();
  return books;
}

const getById = async (bookId) => {
  if (!ObjectId.isValid(bookId)) return null;
  const db = await connection();
  const book = await db.collection('books').findOne({ _id: ObjectId(bookId) });
  return book;
}

const isValid = async (newBook) => {
  if (!newBook.title || newBook.title.length < 3) return false;
  if (!newBook.authorId) return false;
  const search = await Author.getByAuthorId(newBook.authorId);
  if (!search) return false; 
  return true;
}

const create = async ({ authorId, title }) => {
  const db = await connection();
  const result = await db.collection('books').insertOne({ authorId, title });
  return result.ops[0];
}

module.exports = {
  getAll,
  getByAuthorId,
  getById,
  isValid,
  create
}
