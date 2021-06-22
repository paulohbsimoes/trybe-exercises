const readline = require('readline-sync');

function getRandomNumber(max) {
  return Math.floor(Math.random() * (max + 1));
}

function game() {
  const randomNumber = getRandomNumber(10);
  const guess = readline.questionInt('Advinhe um número de 0 a 10: ');
  if (guess == randomNumber) return 'Parabéns, número correto!';
  return `Opa, não foi dessa vez. O número era ${randomNumber}`;
}

let playAgain = null;
do {
  const result = game();
  console.log(result);
  playAgain = readline.question('Deseja jogar novamente? (Y/n): ');
} while (playAgain.toLowerCase() === 'y');
