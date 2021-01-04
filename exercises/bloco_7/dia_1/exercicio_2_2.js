function longestWord(phrase) {
  const words = phrase.match(/\b[a-záàâãéèêíïóôõöúçñ]+\b/gi);
  return words.reduce((acc, cur) => cur.length > acc.length ? cur : acc);
}

console.log(longestWord("Antônio foi no banheiro e não sabemos o que aconteceu")); // retorna 'aconteceu'
