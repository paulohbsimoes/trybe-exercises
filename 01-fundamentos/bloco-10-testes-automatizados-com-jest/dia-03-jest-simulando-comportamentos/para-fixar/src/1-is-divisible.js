const randomNumber = require('./1-random-number');

const isDivisible = (number) => (randomNumber.randomNumber() % number) === 0;

module.exports = { isDivisible };
