const assert = require('assert');
// escreva a função addAllnumbers aqui
const addAllnumbers = numbers => numbers.reduce((acc, cur) => acc + cur);

const numbers = [9, 23, 10, 3, 8];
const expected = 53;
const output = addAllnumbers(numbers);

assert.strictEqual(typeof addAllnumbers, 'function');
assert.strictEqual(output, expected);
