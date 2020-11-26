function secondThirdSmallest(array) {
  let results = array.slice(0);
  results.sort(function (x, y) {
      return x - y;
  });
  results = [results[1], results[2]];
  return results;
};

const parameter = [4, 10, 32, 9, 21, 90, 5, 11, 8, 6];
const result = [5, 6];

const assert = require('assert');

assert.deepStrictEqual(secondThirdSmallest(parameter), result);
