const readline = require('readline-sync');

const PESO = readline.questionFloat('Qual seu peso? ');
const ALTURA = readline.questionFloat('Qual sua altura? ');

function getSituation(imc) {
  if (imc < 18.5) return 'Abaixo do peso (magreza)';
  if (imc < 25) return 'Peso normal';
  if (imc < 30) return 'Acima do peso (sobrepeso)';
  if (imc < 35) return 'Obesidade grau I ';
  if (imc < 40) return 'Obesidade grau II ';
  return 'Obesidade graus III e IV';
}

function getIMC(peso, altura) {
  return peso / (altura ** 2);
}

console.log(`${getIMC(PESO, ALTURA)}, ${getSituation(getIMC(PESO, ALTURA))}`);
