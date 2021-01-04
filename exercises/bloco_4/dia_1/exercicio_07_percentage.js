// 7 - Escreva um programa que converte uma nota dada em porcentagem (de 0 a 100) em conceitos de A a F. Siga essas regras:
// Porcentagem >= 90 -> A
// Porcentagem >= 80 -> B
// Porcentagem >= 70 -> C
// Porcentagem >= 60 -> D
// Porcentagem >= 50 -> E
// Porcentagem < 50 -> F
// O programa deve retornar uma mensagem de erro e encerrar se a nota passada for menor que 0 ou maior que 100.

const percentage = 101;

if (percentage < 0 || percentage > 100) {
  console.log('Invalid percentage');
} else if (percentage >= 90) {
  console.log('A');
} else if (percentage >= 80) {
  console.log('B');
} else if (percentage >= 70) {
  console.log('C');
} else if (percentage >= 60) {
  console.log('D');
} else if (percentage >= 50) {
  console.log('E');
} else {
  console.log('F');  
}