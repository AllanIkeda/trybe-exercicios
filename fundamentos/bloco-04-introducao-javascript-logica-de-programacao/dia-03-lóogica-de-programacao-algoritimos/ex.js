
// for ( let i = 0; i < fruits.length; i += 1) {
//   soma += fruits[i]
// }
// if  (soma > 15) {
//   console.log(soma)
// } else {
// //   console.log('valor menor que 16')
// // }
// let fruits = [3, 4, 10, 1, 12];
// let soma = 0
// fruits.forEach(f => {
//   // console.log(f)
//   soma += f
// });

// if  (soma > 15) {
//     console.log(soma)
//   }else {
//     console.log('valor menor que 16')
//   }

// const n = 9;

// let resultado = 100;
// for (let index = 0; index <= n; index += 1) {
//   resultado -= index;
// };
// console.log(resultado);

// let array = [];
// soma = 0;
// for (let i = 0; i <= 100; i += 1) {
//   array.push(i);
// }
// array.forEach(e => {
//   soma += e;
  
// });
// console.log(soma);

let items = ['batata', 'x-tudo', 'refri', 'mac', 'nuggets', 'suco' ];
let prices = [12, 33, 5, 9, 15];

// for (let i = 0; i < items.length; i += 1) {
//  if (prices[i] == undefined) {
//     console.log(items[i] + ' = R$ não esta definido');
//   }else {
//     console.log(items[i] + ' = R$' + prices[i] );
//   }
// }

let money = 20;
let lista = [];
let maior = 0;
for (let index = 0; index < prices.length; index += 1) {
  if (prices[index] <= money) {
    lista.push(items[index]);
  };
  if (prices[index] <= money && prices[index] > maior) { {
    maior = prices[index];
  };
  };
};
console.log(maior);
console.log(lista);

