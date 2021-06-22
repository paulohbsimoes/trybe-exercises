const order = {
  name: 'Rafael Andrade',
  phoneNumber: '11-98763-1416',
  address: {
    street: 'Rua das Flores',
    number: '389',
    apartment: '701',
  },
  order: {
    pizza: {
      margherita: {
        amount: 1,
        price: 25,
      },
      pepperoni: {
        amount: 1,
        price: 20,
      }
    },
    drinks: {
      coke: {
        type: 'Coca-Cola Zero',
        price: 10,
        amount: 1,
      }
    },
    delivery: {
      deliveryPerson: 'Ana Silveira',
      price: 5,
    }
  },
  payment: {
    total: 60,
  },
};

const customerInfo = (order) => {
  // Adicione abaixo as informações necessárias.
  const { deliveryPerson } = order.order.delivery;
  const { name, phoneNumber } = order;
  const { street, number, apartment } = order.address;
  return `Olá ${deliveryPerson}, entrega para: ${name}, Telefone: ${phoneNumber}, R. ${street}, Nº: ${number}, AP: ${apartment}.`;
}

console.log(customerInfo(order));

const orderModifier = (order) => {
  // Adicione abaixo as informações necessárias.
  const { name } = order;
  const { total } = order.payment;
  const pizzas = Object.keys(order.order.pizza);
  const drinks = Object.keys(order.order.drinks).map(drink => order.order.drinks[drink].type);
  const items = [pizzas, drinks].flat().join(', ');
  return `Olá ${name}, o total do seu pedido de ${items.replace(/,(?!.*,)/, ' e')} é R$${total.toString().replace('.', ',')}.`
}

order.name = 'Luiz Silva';
order.payment.total = 50;

console.log(orderModifier(order));