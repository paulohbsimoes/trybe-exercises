const connection = require('./connection');
const saveMe = require('../utils/saveMe');
const { ObjectId } = require('mongodb');

const serialize = ({ _id, name, brand }) => ({
  id: _id,
  name,
  brand
})

const add = saveMe(async (name, brand) => {
  const db = await connection();
  const { insertedId } = await db.collection('products').insertOne({ name, brand });
  return { id: insertedId, name, brand };
});

const getAll = saveMe(async () => {
  const db = await connection();
  const result = await db.collection('products').find().toArray();
  return result.map(serialize);
});

const getById = saveMe(async (id) => {
  if (!ObjectId.isValid(id)) return null;
  const db = await connection();
  const result = await db.collection('products').findOne(ObjectId(id));
  return serialize(result);
});

const update = saveMe(async (id, name, brand) => {
  const db = await connection();
  const { modifiedCount } = await db.collection('products')
    .updateOne({ _id: ObjectId(id) }, { $set: { name, brand } });
  if (!modifiedCount) return null;
  return { id, name, brand };
});

const exclude = saveMe(async (id) => {
  const product = await getById(id);
  if (!product) return null;
  const db = await connection();
  const { deletedCount } = await db.collection('products').deleteOne({ _id: ObjectId(id) });
  if (!deletedCount) return null;
  return product;
});

module.exports = { add, getAll, getById, update, exclude };
