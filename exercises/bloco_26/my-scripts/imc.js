const PESO = 69;
const ALTURA = 1.70;

function getIMC(peso, altura) {
  return peso / (altura ** 2);
}

console.log(getIMC(PESO, ALTURA));
