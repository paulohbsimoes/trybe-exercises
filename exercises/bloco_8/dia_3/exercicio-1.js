const assert = require('assert');

const arrays = [
  ["1", "2", "3"],
  [true],
  [4, 5, 6]
];


function flatten() {
  return arrays.reduce((acc, cur) => acc.concat(cur));
}

assert.deepEqual(flatten(), ["1", "2", "3", true, 4, 5, 6]);
