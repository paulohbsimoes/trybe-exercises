let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

let oddNumbers = 0;

for (let i = 0, len = numbers.length; i < len; i++) {
  if (numbers[i] % 2 != 0) oddNumbers++;
}

if (oddNumbers > 0) {
  console.log(`Odd numbers found = ${oddNumbers}`);
} else {
  console.log(`Odd numbers not found`);
}