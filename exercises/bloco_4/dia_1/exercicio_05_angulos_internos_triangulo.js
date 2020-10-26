// 5 - Faça um programa que defina três variáveis com os valores dos três ângulos internos de um triângulo.
// Retorne true se os ângulos representarem os ângulos de um triângulo e false caso contrário.
// Para os ângulos serem de um triângulo válido, a soma dos três deve ser 180 graus.
// Caso os ângulos estejam inválidos, o programa deve retornar uma mensagem de erro.

const anguloA = 50;
const anguloB = 80;
const anguloC = 50;

if (anguloA + anguloB + anguloC == 180) {
  console.log('true');
} else {
  console.log('false');
}