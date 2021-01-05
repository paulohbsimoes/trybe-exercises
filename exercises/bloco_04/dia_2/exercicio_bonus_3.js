let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

let newNumbers = [];
for (let i = 0; i < numbers.length; i++) {
  if (i + 1 < numbers.length) {
    newNumbers.push(numbers[i] * numbers[i + 1]);
  } else {
    newNumbers.push(numbers[i] * 2);
  }
}

console.log(newNumbers.join(' '));