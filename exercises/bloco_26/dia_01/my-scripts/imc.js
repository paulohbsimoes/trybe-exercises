const readline = require('readline-sync');

const PESO = readline.questionFloat('Qual seu peso? ');
const ALTURA = readline.questionFloat('Qual sua altura? ');;

function getIMC(peso, altura) {
  return peso / (altura ** 2);
}

console.log(getIMC(PESO, ALTURA));
