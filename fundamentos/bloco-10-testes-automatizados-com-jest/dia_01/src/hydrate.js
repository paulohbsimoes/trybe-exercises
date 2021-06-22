function hydrate(string) {
  const coposDeAgua = string.match(/\d+/g)
    .map(Number)
    .reduce((acc, cur) => acc + cur);
  return `${coposDeAgua} copo${coposDeAgua > 1 ? 's' : ''} de água`;
}

module.exports = hydrate;
