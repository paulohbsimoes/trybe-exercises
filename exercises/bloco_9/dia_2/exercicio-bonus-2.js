const getRandomNumber = (limit) => {
  return Math.floor(Math.random() * limit) + 1;
}

const getNumbers = (amount, limit) => {
  const numbers = [];
  while(numbers.length < 10) {
    numbers.push(getRandomNumber(limit));
  }
  return numbers;
}

const getSum = async () => {
  return new Promise((resolve, reject) => {
    const numbers = getNumbers(10, 50);
    const squaredNumbers = numbers.map(number => Math.pow(number, 2));
    const sum = squaredNumbers.reduce((acc, number) => acc + number);
    if (sum < 8000) return resolve(sum);
    reject('A soma foi maior que 8000');
  })
    .then(result => [2, 3, 5, 10].map(divisor => result / divisor))
    .then(result => result.reduce((acc, cur) => acc + cur))
    .catch(() => 'É mais de oito mil! Essa promise deve estar quebrada!');
}

const verifySum = async () => {
  const result = await getSum();
  console.log(result);
}

verifySum();
