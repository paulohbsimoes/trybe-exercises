let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

let higher = -Infinity;

for (let i = 0, len = numbers.length; i < len; i++) {
  if (numbers[i] > higher) higher = numbers[i];
}

console.log(`Higher number = ${higher}`);