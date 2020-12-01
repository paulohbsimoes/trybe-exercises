const assert = require('assert');

const names = [
  'Aanemarie',  'Adervandes',   'Akifusa',
  'Abegildo',   'Adicellia',    'Aladonata',
  'Abeladerco', 'Adieidy',  'Alarucha',
];

function containsA() {
  return names.reduce((acc, cur) => acc + cur.match(/a/gi).length, 0);
}

assert.deepEqual(containsA(), 20);
