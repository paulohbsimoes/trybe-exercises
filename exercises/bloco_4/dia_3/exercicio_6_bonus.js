const num = 30;

let isPrime = true;

if (num < 2) {
  isPrime = false;
} else {
  for (let i = 2; i < num; i++) {
    if (num % i === 0) {
      isPrime = false;
      break;
    }
  }
}

if (isPrime) {
  console.log(`${num} is prime`)
} else {
  console.log(`${num} is not prime`)
}