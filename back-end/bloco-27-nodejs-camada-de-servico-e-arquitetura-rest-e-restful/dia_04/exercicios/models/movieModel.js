const { ObjectId } = require('mongodb');
const connection = require('./connection');

const getAll = async () => {
  const moviesCollection = await connection()
    .then((db) => db.collection('movies'));

  const movies = await moviesCollection
    .find()
    .toArray();

  return movies.map(({ _id, ...movieData }) => ({
    id: _id,
    ...movieData,
  }));
};

const create = async ({ title, directedBy, releaseYear }) => {
  const moviesCollection = await connection()
    .then((db) => db.collection('movies'));

  const { insertedId: id } = await moviesCollection
    .insertOne({ title, directedBy, releaseYear });

  return {
    id,
  };
};

const getById = async (id) => {
  if (!ObjectId.isValid(id)) return null;
  const db = await connection();
  return db.collection('movies').findOne(ObjectId(id));
};

const remove = async (id) => {
  if (!ObjectId.isValid(id)) return null;
  const movie = await getById(id);
  const db = await connection();
  const { deletedCount } = await db.collection('movies').deleteOne({ _id: ObjectId(id) });
  if (!deletedCount) return null;
  return movie; 
};

module.exports = {
  create,
  getAll,
  getById,
  remove
};
