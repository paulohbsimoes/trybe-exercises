const fs = require('fs');
const path = require('path');
const connection = require('../models/connection')

const basename = path.basename(__filename);
const seeders = [];

fs.readdirSync(__dirname)
  .filter((file) => file.endsWith('.js') && file !== basename && file.slice(-3) === '.js')
  .forEach((file) => seeders.push(require(path.join(__dirname, file))));

;(async () => {
  console.log('Running seeders');
  await Promise.all(seeders.map((seeder) => seeder()))
  console.log('Completed successfully');
  connection.close();
})();
