const sumThreeNumbers = (...args) => new Promise((resolve, reject) => {
  if (args.some((arg) => typeof arg !== 'number')) {
    throw new Error('Informe apenas números');
  }
  if (args.length !== 3) {
    throw new Error('Devem ser informados 3 números');
  }
  const [a, b, c] = args;
  const result = (a + b) * c;
  if (result < 50) return reject(new Error('Valor muito baixo'));
  resolve(result);
});

module.exports = {
  sumThreeNumbers
}
