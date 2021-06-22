// 4 - Faça um programa que, dado um valor definido numa variável, retorne "positive" se esse valor for positivo, "negative" se for negativo e "zero" caso contrário.

const num = -1;

if (num > 0) {
  console.log(`${num} é positivo`);
} else if (num < 0) {
  console.log(`${num} é negativo`);
} else {
  console.log(`Zero`);
}