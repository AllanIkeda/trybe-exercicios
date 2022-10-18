const order = {
  name: "Rafael Andrade",
  phoneNumber: "11-98763-1416",
  address: {
    street: "Rua das Flores",
    number: "389",
    apartment: "701",
  },
  order: {
    pizza: {
      marguerita: {
        amount: 1,
        price: 25,
      },
      pepperoni: {
        amount: 1,
        price: 20,
      },
    },
    drinks: {
      coke: {
        type: "Coca-Cola Zero",
        price: 10,
        amount: 1,
      },
    },
    delivery: {
      deliveryPerson: "Ana Silveira",
      price: 5,
    },
  },
  payment: {
    total: 60,
  },
};

const customerInfo = (order) => {
  const Rua = order.address.street;
  const numRua = order.address.number;
  const numApt = order.address.apartment;
  const endereco = `${Rua}, Nº: ${numRua}, AP: ${numApt}`
  const deliveryPerson = order.order.delivery.deliveryPerson;
  console.log(`Olá ${deliveryPerson}, entrega para ${order.name}, Telefone: ${order.phoneNumber}, ${endereco}`);


};

customerInfo(order);

const orderModifier = (order) => {
const novaPessa = order.name = 'Luiz Silva';
const preço = order.payment.total = 50;
const lanche = Object.keys(order.order.pizza);
const drinks = order.order.drinks.coke.type;

console.log(`Olá ${novaPessa}, o total do seu pedido de ${lanche[0], lanche[1]} e ${drinks} é R$ ${preço},00.`);
  // “Olá Luiz Silva, o total do seu pedido de marguerita, pepperoni e Coca-Cola Zero é R$ 50,00.”
};

orderModifier(order);
