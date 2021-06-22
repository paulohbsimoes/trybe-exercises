module.exports = (number) => {
  if (typeof number !== 'number') throw new Error('o valor deve ser um número');
  if (number === 0) return 'neutro';
  return number < 0 ? 'negativo' : 'positivo';
}
