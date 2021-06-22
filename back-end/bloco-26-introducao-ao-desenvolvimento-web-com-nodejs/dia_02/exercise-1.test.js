const assert = require('assert');
const { sumThreeNumbers } = require('./exercise-1');

assert.rejects(
  () => sumThreeNumbers(1, 2, '2'),
  { message: 'Informe apenas números'}
);

assert.rejects(
  () => sumThreeNumbers(1, 1),
  { message: 'Devem ser informados 3 números'}
);

assert.rejects(
  () => sumThreeNumbers(1, 1, 1),
  { message: 'Valor muito baixo'}
);

assert.rejects(
  () => sumThreeNumbers(1, 1, 1),
  { message: 'Valor muito baixo'}
);

(async () => {
  assert.strictEqual(await sumThreeNumbers(5, 5, 5), 50);
})();
