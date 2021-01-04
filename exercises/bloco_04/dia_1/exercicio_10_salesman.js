// 10 - Escreva um programa que se inicie com dois valores em duas variáveis diferentes: o custo de um produto e seu valor de venda.
// A partir dos valores, calcule quanto de lucro (valor de venda descontado o custo do produto) a empresa terá ao vender mil desses produtos.
// Atente que, sobre o custo do produto, incide um imposto de 20%.
// Seu programa também deve emitir uma mensagem de erro e encerrar caso algum dos seus valores de entrada seja menor que zero.
// O lucro de um produto é o resultado da subtração do valor de venda pelo custo do mesmo,
// sendo que o imposto de 20% também faz parte do valor de custo.
// valorCustoTotal = valorCusto + impostoSobreOCusto
// lucro = valorVenda - valorCustoTotal (lucro de um produto)

const product_cost = 900;
const sale_price = 1200;

const tax = 0.2;
const sold_itens_number = 1000;

if (product_cost < 0 || sale_price < 0) {
  console.log('Invalid input');
} else {
  const tax_cost = product_cost * tax;
  const profit_per_sale = sale_price - (product_cost + tax_cost);
  console.log(`${sold_itens_number} products sale profit: ${ sold_itens_number * profit_per_sale }`);
}