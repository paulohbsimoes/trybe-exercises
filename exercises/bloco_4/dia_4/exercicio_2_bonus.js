// Link: https://www.codewars.com/kata/5effa412233ac3002a9e471d/javascript

function add(num1, num2) {
  let a = String(num1);
  let b = String(num2);
  let len = a.length > b.length ? a.length : b.length;
  a = a.padStart(len, '0');
  b = b.padStart(len, '0');
  let result = [];
  for (let i = 1; i <= len; i++) {
    let soma = Number(a[len - i]) + Number(b[len - i]);
    result.unshift(soma);
  }
  return Number(result.join(''));
}

console.log(add(10, 9999));
