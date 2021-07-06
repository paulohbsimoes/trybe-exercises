const { connection } = require('../models/connection');

const defaultPlants = [
  {
    breed: "Bromelia",
    needsSun: false,
    origin: "Argentina",
    size: 102,
    specialCare: {
      waterFrequency: 3,
    },
  },
  {
    breed: "Orquidea",
    size: 99,
    needsSun: false,
    origin: "Brazil",
  },
];

module.exports = async () => {
  const db = await connection();
  await db.collection('plants').deleteMany({});
  await db.collection('plants').insertMany(defaultPlants);
};
