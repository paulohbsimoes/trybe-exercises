let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

let sum = 0;

for (let i = 0, len = numbers.length; i < len; i++) {
  sum += numbers[i];
}

const average = sum / numbers.length;
console.log(`Average = ${average}`);