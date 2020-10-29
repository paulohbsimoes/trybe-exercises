function verificaFimPalavra(word, ending) {
  const lenWord = word.length;
  const lenEnding = ending.length;
  for (let i = 1 ; ; i += 1) {
    if (word[lenWord - i] != ending[lenEnding - i]) {
      return false;
    } else if (i == lenEnding) {
      break;
    }
  }
  return true;
}

console.log(verificaFimPalavra("trybe", "be")); //true
console.log(verificaFimPalavra("joaofernando", "fernan")); //false
