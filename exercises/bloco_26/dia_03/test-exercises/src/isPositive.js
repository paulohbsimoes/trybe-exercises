module.exports = (number) => {
  if (number === 0) return 'neutro';
  return number < 0 ? 'negativo' : 'positivo';
}
