const getRandomNumber = (limit) => {
  return Math.floor(Math.random() * limit) + 1;
}

new Promise((resolve, reject) => {
  const numbers = [];
  while(numbers.length < 10) {
    numbers.push(getRandomNumber(50));
  }
  const squaredNumbers = numbers.map(number => Math.pow(number, 2));
  const sum = squaredNumbers.reduce((acc, number) => acc + number);
  if (sum < 8000) return resolve(sum);
  reject('A soma foi maior que 8000');
})
  .then(result => console.log(result))
  .catch(result => console.log(result));
