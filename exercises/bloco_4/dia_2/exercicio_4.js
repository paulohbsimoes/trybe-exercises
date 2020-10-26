let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

let sum = 0;

for (let i = 0, len = numbers.length; i < len; i++) {
  sum += numbers[i];
}

const average = sum / numbers.length;

if (average > 20) {
  console.log(`Average = ${average}, valor maior que 20`);
} else {
  console.log(`Average = ${average}, valor menor ou igual a 20`);
}