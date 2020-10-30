function somatoria(num) {
  let soma = 0;
  for (let i = 1; i <= num; i++) {
    soma += i;
  }
  return soma;
}

console.log(somatoria(5));