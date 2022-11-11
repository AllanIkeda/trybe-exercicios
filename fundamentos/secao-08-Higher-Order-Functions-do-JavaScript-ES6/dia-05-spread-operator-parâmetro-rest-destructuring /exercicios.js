// /**
//  * ! exemplo 1
//  */

// const numbers = [1, 2, 3];

// const newArray = [...numbers, 4, 5, 6];
// console.log(newArray); // [ 1, 2, 3, 4, 5, 6 ]
// console.log(numbers); // [ 1, 2, 3 ]
// /**
//  * ! exemplo 2
//  */

// const spring = ['OUT', 'NOV', 'DEZ'];
// const summer = ['JAN', 'FEV', 'MAR'];
// const fall = ['ABR', 'MAI', 'JUN'];
// const winter = ['JUL', 'AGO', 'SET'];

// const months = [...summer, ...fall, ...winter, ...spring];
// console.log(months);
// /**
// * ! exemplo 3
// */

// const imc = (peso, altura) => (peso / (altura * altura)).toFixed(2);
// const patientInfo = [60, 1.7];

// console.log(imc(...patientInfo)); // 20.76
// /**
//  * ! exemplo 4
//  */

// const randomNumbers = [57, 8, 5, 800, 152, 74, 630, 98, 40];

// console.log(Math.max(57, 8, 5, 800, 152, 74, 630, 98, 40)); // 800
// console.log(Math.min(...randomNumbers)); // 5

// /**
// * ! exemplo 5
// */
// const people = {
//   id: 101,
//   name: 'Alysson',
//   age: 25,
// };

// const about = {
//   address: 'Av. Getúlio Vargas, 1000',
//   occupation: 'Developer',
// };

// const customer = { ...people, ...about };

// console.log(customer);

// /**
// * ! para Fixar 1
// */
// // Faça uma lista com as suas frutas favoritas
// const specialFruit = ['maçã', 'laranja', 'morangos'];

// // Faça uma lista de complementos que você gostaria de adicionar
// const additionalItens = ['mamão', 'uva', 'pera'];

// const fruitSalad = (fruit, additional) => {
//   // Escreva sua função aqui
//   return [...fruit, ...additional];
// };

// console.log(fruitSalad(specialFruit, additionalItens));
// /**
//  * *rest
// * !exemplo 1
// */

// function quantosParams(...args) {
//   console.log('parâmetros:', args);
//   return `Você passou ${args.length} parâmetros para a função.`;
// }

// console.log(quantosParams(0, 1, 2)); // Você passou 3 parâmetros para a função.
// console.log(quantosParams('string', null, [1, 2, 3], { })); // Você passou 4 parâmetros para a função.
// /**
// * !exemplo 2
// */

// const sum = (...args) => args
// .reduce((accumulator, current) => accumulator + current, 0);
// console.log(sum(4, 7, 8, 9, 60)); // 88
/**
 * *Object Destructuring
* !exemplo 1
*/

// const product = {
//   name: 'Smart TV Crystal UHD',
//   price: '1899.05',
//   seller: 'Casas de Minas',
// };
// // const { name } = product;
// // console.log(name); // Smart TV Crystal UHD

// const { name, seller } = product;
// console.log(name); // Smart TV Crystal UHD
// console.log(seller); // Casas de Minas

/**
* !exemplo 2
*/

// definindo o objeto
// definindo o objeto
// const character = {
//   name: 'Luke SkyWalker',
//   age: '53',
//   description: {
//     specieName: 'Human',
//     jedi: true,
//   },
//   homeWorld: {
//     name: 'Tatooine',
//     population: '200000',
//   },
// };

// // desestruturando o objeto:
// const { name, age, homeWorld: { name: planetName }, description: { jedi } } = character;

// // imprimindo os valores:
// console.log(`Esse é o ${name}, ele tem ${age} anos, mora no planeta ${planetName} e, por incrível que possa parecer, ele ${jedi ? 'é um Jedi' : 'não é um Jedi'}.`);
/**
* !exemplo 3
*/


// const daysOfWeek = {
//   workDays: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
//   weekend: ['Saturday', 'Sunday'],
// };

// const { workDays, weekend } = daysOfWeek;
// console.log(workDays); // ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday']
// console.log(weekend); // ['Saturday', 'Sunday']

// const weekdays = [...workDays, ...weekend];
// console.log(weekdays); // ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']
// /**
// * !exemplo 4
// */
// const student = {
//   a: 'Maria',
//   b: 'Turma B',
//   c: 'Matematica',
// };
// //renomeando
// const { a: name, b: classAssigned, c: subject } = student;

// console.log(name); // Maria
// console.log(classAssigned); // Turma B
// console.log(subject); // Matemática
// /**
//  * ! OU
//  */
//  const student = {
//   a: 'Maria',
//   b: 'Turma B',
//   c: 'Matematica',
// };
// const name = student.a;
// console.log(name); // Maria

// /**
// * !exemplo 5
// */
// const product = {
//   name: 'Smart TV Crystal UHD',
//   price: '1899.05',
//   seller: 'Casas de Minas',
// };

// const printProductDetails = ({ name, price, seller }) => {
//   console.log(`Promoção! ${name} por apenas ${price} é só aqui: ${seller}`);
// };

// printProductDetails(product); // Promoção! Smart TV Crystal UHD por apenas 1899.05 é só aqui: Casas de Minas

// /**
// * ! Para fixar 2
// */

// const user = {
//   name: 'Maria',
//   age: 21,
//   nationality: 'Brazilian',
// };

// const jobInfos = {
//   profession: 'Software engineer',
//   squad: 'Rocket Landing Logic',
//   squadInitials: 'RLL',
// };

// const infos = {
//   ...user,
//   ...jobInfos,
// }

// const {name, age, nationality, profession, squad, squadInitials } = infos;

// console.log(`Hi, my name is ${name}, I'm ${age} years old and I'm ${nationality}. I work as a ${profession} and my squad is ${squadInitials}-${squad}`);

// /**
//  * *Arrays Destructuring
// * !para Fixar 3
// */
// const saudacoes = ['Olá', (saudacao) => console.log(saudacao)];

// const [saudacao, funcao] = saudacoes;
// funcao(saudacao);
// // saudacoes[1](saudacoes[0]); // Olá

// // Produza o mesmo resultado acima, porém utilizando array destructuring
// let comida = 'gato';
// let animal = 'água';
// let bebida = 'arroz';

// // console.log(comida, animal, bebida); // arroz gato água

// [comida, animal, bebida] = [bebida, comida, animal];
// console.log(comida, animal, bebida);
// // Utilizando array destructuring, faça com que os valores apareçam nas variáveis correspondentes ao seu verdadeiro tipo

// let numerosPares = [1, 3, 5, 6, 8, 10, 12];

// console.log(numerosPares); // [6, 8, 10, 12];

// // Utilize array destructuring para produzir o resultado esperado pelo console.log abaixo

// [,,, ...numerosPares] = numerosPares;

// console.log(numerosPares); // [6, 8, 10, 12];
// /**
//  * *default Destructuring
// * !para Fixar 4
// */
// const getNationality = ({ firstName, nationality = 'Brazilian' }) => `${firstName} is ${nationality}`;

// const person = {
//   firstName: 'João',
//   lastName: 'Jr II',
// };

// const otherPerson = {
//   firstName: 'Ivan',
//   lastName: 'Ivanovich',
//   nationality: 'Russian',
// };
// //  const { nationality = 'Brazilian'} = person;
// console.log(getNationality(otherPerson)); // Ivan is Russian
// console.log(getNationality(person));

// /**
//  * *Object Property Shorthand
// * !para Fixar 5
// */
// const getPosition = (latitude, longitude) => ({
//   latitude,
//   longitude,
// });

// console.log(getPosition(-19.8157, -43.9542));

// const multiply = (number, value) => {
//   // Escreva aqui a sua função
// };
// /**
//  * *Default Parameters
// * !para Fixar 5
// */
// const multiply = (number = 1, value = 1) => number * value;

// console.log(multiply(8, 8));

/**
* !exercicio 1
** Dado o código abaixo, altere a chamada da função rectangleArea
** de forma que seja impressa a área dos 3 retângulos (rectangle1, rectangle2 e rectangle3).
** O código deve retornar em sequência 2, 15 e 54.
* ?De olho na dica 👀: use spread operator.
*/
const rectangleArea = (width, height) => width * height;

const rectangle1 = [1, 2];
const rectangle2 = [3, 5];
const rectangle3 = [6, 9];
const rectangles = [rectangle1, rectangle2, rectangle3];

rectangles.forEach((rectangle) => {
  console.log(rectangleArea(...rectangle)); // Altere o parâmetro recebido por rectangleArea()
});

/**
* !exercicio 2
** Crie uma função sum que dado um número ilimitado de parâmetros retorna a soma desses parâmetros.
** Ao chamar a função dessa forma : sum(4,5,6) o número 15 deve ser retornado.

* ? De olho na dica 👀: use o parâmetro rest.
*/
// escreva sum abaixo
const sum = (...parametro) => {
  return parametro.reduce((acc, curr) => acc + curr);
}
console.log(sum(1, 2, 3 ,4 ,5));

/**
* !exercicio 3
** Escreva a função personLikes, que dado um objeto de parâmetro que representa uma pessoa
** (variáveis alex e gunnar), retorna todos os gostos daquela pessoa, conforme mostrado abaixo:

* ? De olho na dica 👀: use o object destructuring.
*/
const alex = {
  name: 'Alex',
  age: 26,
  likes: ['fly fishing'],
  nationality: 'Australian',
};

const gunnar = {
  name: 'Gunnar',
  age: 30,
  likes: ['hiking', 'scuba diving', 'taking pictures'],
  nationality: 'Icelandic',
};
const personLikes = ({name, age, likes}) => `${name} is ${age} years old and likes ${likes.join(', ')}.`;
console.log(personLikes(alex)); // 'Alex is 26 years old and likes fly fishing.'
console.log(personLikes(gunnar)); // 'Gunnar is 30 years old and likes hiking, scuba diving, taking pictures.'

/**
* !exercicio 4 🚀
** Escreva uma função filterPeople que, dada uma lista de pessoas,
** retorne todas as pessoas australianas que nasceram no século 20:
* ? De olho na dica 👀: use o object destructuring.
*/
const people = [
  {
    name: 'Nicole',
    bornIn: 1992,
    nationality: 'Australian',
  },
  {
    name: 'Harry',
    bornIn: 2008,
    nationality: 'Australian',
  },
  {
    name: 'Toby',
    bornIn: 1901,
    nationality: 'Australian',
  },
  {
    name: 'Frida',
    bornIn: 1960,
    nationality: 'Dannish',
  },
  {
    name: 'Fernando',
    bornIn: 2001,
    nationality: 'Brazilian',
  },
    // bornIn: nascido em
];

// escreva filterPeople abaixo
const filterPeople = (array) => {
  return array.filter(({nationality, bornIn}) => {
    return nationality === 'Australian' && bornIn < 2000;
  })
}
 console.log(filterPeople(people));
/**
* !exercicio 5
** Escreva a função swap, que dado um array de 3 elementos, retorna um novo array com o primeiro e
** terceiro elementos trocados. Detalhe: você precisa fazer essa função gastando apenas 1 linha. O retorno da
** função utilizando o array myList deve ser [3, 2, 5].
* ? De olho na dica 👀: use o array destructuring.
*/
const myList = [5, 2, 3];
// escreva swap abaixo
const swap = ([primeiro, segundo, terceiro]) => [terceiro, segundo, primeiro];
console.log(swap(myList));
/**
* !exercicio 6
** Suponha que você esteja lidando com carros e, da forma como o problema lhe foi entregue, cada carro é
** representado dentro de um array. Então seu chefe pede que seja mudado o formato de array para objeto.
** Crie uma função toObject que, dada uma lista, retorna um objeto representando o carro:
* ? De olho na dica 👀: use o array destructuring e abbreviation object literal.
*/
const palio = ['Palio', 'Fiat', 2019];
const shelbyCobra = ['Shelby Cobra', 'Ford', 1963];
const chiron = ['Chiron', 'Bugatti', 2016];
const carros = [[...palio], [...shelbyCobra], [...chiron]];
// console.log(carros);
// escreva toObject abaixo
const toObject = (carro) => {
  return carro.map(([tipo, marca, ano]) => ({ tipo, marca, ano,}))};

console.log(toObject(carros));
console.log(toObject(shelbyCobra));
console.log(toObject(chiron));
/**
* !exercicio 7
** Escreva uma função shipLength que, dado um objeto representando um navio, retorna o comprimento
** dele, mostrando também a devida unidade de medida:
* ? De olho na dica 👀: use o object destructuring.
*/
const ships = [
  {
    name: 'Titanic',
    length: 269.1,
    measurementUnit: 'meters',
  },
  {
    name: 'Queen Mary 2',
    length: 1132,
    measurementUnit: 'feet',
  },
  {
    name: 'Yamato',
    length: 256,
    measurementUnit: 'meters',
  },
     // measurementUnit: unidade de medida
];



// escreva shipLength abaixo


// retorno esperado
console.log(shipLength(ships[0])); // 'Titanic is 269.1 meters long'
console.log(shipLength(ships[1])); // 'Queen Mary 2 is 1132 feet long'
console.log(shipLength(ships[2])); // 'Yamato is 256 meters long'

/**
* !exercicio 8
** Escreva uma função greet que, dado o nome de uma pessoa, retorna uma mensagem de cumprimento.
** Um parâmetro adicional pode ser passado para alterar o cumprimento utilizado:
* ? De olho na dica 👀: use o default params.
*/
// escreva greet abaixo

// Retornos esperados:
console.log(greet('John')); // 'Hi John'
console.log(greet('John', 'Good morning')); // 'Good morning John'
console.log(greet('Isabela', 'Oi')); // 'Oi Isabela'

/**
* !exercicio 9
** Existe um objeto yearSeasons que representa as estações do ano. Cada estação é uma chave deste
** objeto, e o valor de cada chave é um array de strings, representando os meses daquela estação. A partir
** deste objeto, desestruture as estações do ano e espalhe-as em um array de meses do ano.
* ? De olho na dica 👀: use object destructuring e spread operator.
* ? 💬 OBS: As estações do ano aqui descritas têm base nas estações do hemisfério norte.
*/


const yearSeasons = {
  spring: ['March', 'April', 'May'],
  summer: ['June', 'July', 'August'],
  autumn: ['September', 'October', 'November'],
  winter: ['December', 'January', 'February'],
};
// yearSeasons: estações do ano.
const cart = [
  {
    name: "laptop",
    price: 1000,
    quantity: 2,
    id: 3,
  },
  {
    name: "desktop",
    price: 1500,
    quantity: 1,
    id: 2,
  },
  {
    name: "phone",
    price: 500,
    quantity: 3,
    id: 1,
  },
];
// escreva seu código aqui
const valorInicial = 0;
const totalCart = cart.reduce((accumulator, product) => accumulator + product.price * product.quantity, valorInicial);

// fim do código
console.log(totalCart);
