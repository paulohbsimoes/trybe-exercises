const oddsAndEvens = [13, 3, 4, 10, 7, 2];

const sortArray = arr => arr.sort((a, b) => a - b);
sortArray(oddsAndEvens);

console.log(`Os números ${oddsAndEvens.join(',')} se encontram ordenados de forma crescente!`);
