function verificaPalindrome(str) {
  let meio = Math.ceil(str.length / 2);
  let inicio = str.slice(0, meio);
  let fim = str.slice(meio - 1, str.length);
  return inicio == Array.from(fim).reverse().join('');
}

console.log(verificaPalindrome("arara"));
console.log(verificaPalindrome("desenvolvimento"));