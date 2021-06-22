const connection = require('./connection');
const { ObjectId } = require('mongodb');

const serialize = (author) => ({
  id: author._id,
  firstName: author.firstName,
  middleName: author.middleName,
  lastName: author.lastName,
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
  const db = await connection();
  const authors = await db.collection('authors').find().toArray();
  return authors.map(serialize).map(addFullName);
}

// ! alerta de gambiarra ! :poop:
const getByAuthorId = async (authorId) => {
  if (isNaN(authorId) && !ObjectId.isValid(authorId)) return null;

  const db = await connection();
  const newAuthorId = isNaN(authorId) ? ObjectId(authorId) : Number(authorId);
  const author = await db.collection('authors').findOne({ _id: newAuthorId });

  if (!author) return null;

  return addFullName(serialize(author));
}

const create = async ({ firstName, middleName, lastName }) => {
  const db = await connection();
  const newAuthor = addFullName({ firstName, middleName, lastName });
  await db.collection('authors').insertOne(newAuthor);
  return serialize(newAuthor);
}

module.exports = {
  getAll,
  getByAuthorId,
  create
}
