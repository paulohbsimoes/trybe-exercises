/* 
Links: 
https://www.tuomas.salste.net/doc/roman/numeri-romani.html
https://sciencing.com/history-equality-symbols-math-8143072.html
*/

const numerosRomanos = {
  'i': 1,
  'v': 5,
  'x': 10,
  'l': 50,
  'c': 100,
  'd': 500,
  'm': 1000
}

function romanoParaDecimal(numero) {
  numero = numero.toLowerCase();
  let len = numero.length;
  let soma = numerosRomanos[numero[len - 1]];
  let atual = numerosRomanos[numero[len - 1]];
  for (let i = 2; i <= len; i += 1) {
    let prox = numerosRomanos[numero[len - i]];
    if (atual <= prox) {
      soma += prox;
    } else {
      soma -= prox;
    }
    atual = prox;
  }
  return soma;
}

console.log(romanoParaDecimal('MCMLXXXVI')) // 1986
console.log(romanoParaDecimal('DCCLXXXIV')) // 784
console.log(romanoParaDecimal('MMMMDCCXVIII')) // 4718
console.log(romanoParaDecimal('MMMMCMXCIX')) // 4999
