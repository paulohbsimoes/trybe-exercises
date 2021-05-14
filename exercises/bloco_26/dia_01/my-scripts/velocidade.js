const readline = require('readline-sync');

function getVelocity(distância, tempo) {
  return distância / tempo;
}

const DISTANCIA = readline.questionInt('Qual a distância em metros? ');
const TEMPO = readline.questionInt('Qual o tempo em segundos? ');

console.log(`A velocidade é ${getVelocity(DISTANCIA, TEMPO)} m/s`);
