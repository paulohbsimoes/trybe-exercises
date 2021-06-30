const { connection } = require('./connection');
const { ObjectId } = require('mongodb');

const getPlantsCollection = async () => {
  const conn = await connection();
  return conn.collection('plants');
}

const getWaterFrequency = (needsSun, size, origin) => {
  return needsSun 
    ? size *  0.77 + (origin === 'Brazil' ? 8 : 7)
    : (size / 2) *  1.33 + (origin === 'Brazil' ? 8 : 7);
}

const initPlant = ({ id, breed, needsSun, origin, specialCare, size }) => {
  const waterFrequency = getWaterFrequency(needsSun, size, origin);
  return {
    id,
    breed,
    needsSun,
    origin,
    specialCare: {
      waterFrequency,
      ...specialCare,
    },
    size,
  };
};

const findAll = async () => {
  const plants = await getPlantsCollection();
  return plants.find().toArray();
};

const findById = async (id) => {
  const plants = await getPlantsCollection();
  return plants.findOne(ObjectId(id));
};

const removeById = async (id) => {
  const plants = await getPlantsCollection();
  const { deletedCount } = await plants.deleteOne({ _id: ObjectId(id) });
  if (!deletedCount) throw new Error(`Failed to remove plant ${id}`);
  return { message: `${id} removed successfully` };
};

const create = async (plant) => {
  const mappedPlant = initPlant({ ...plant });
  const plants = await getPlantsCollection();
  const { insertedId } = await plants.insertOne(mappedPlant);
  return { _id: insertedId, ...mappedPlant };
};

const edit = async (id, plantData) => {
  const plants = await getPlantsCollection();

  const { modifiedCount } = await plants.updateOne(
    { _id: ObjectId(id) },
    { $set: plantData }
  );

  if (!modifiedCount) throw new Error(`Plant ${id} not modified`);

  return { message: `${id} edited successfully` };
};

module.exports = {
  findAll,
  findById,
  removeById,
  create,
  edit
}
