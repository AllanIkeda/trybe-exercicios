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


const daysOfWeek = {
  workDays: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
  weekend: ['Saturday', 'Sunday'],
};

const { workDays, weekend } = daysOfWeek;
console.log(workDays); // ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday']
console.log(weekend); // ['Saturday', 'Sunday']

const weekdays = [...workDays, ...weekend];
console.log(weekdays); // ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']
/**
* !exemplo 4
*/
const student = {
  a: 'Maria',
  b: 'Turma B',
  c: 'Matematica',
};
//renomeando
const { a: name, b: classAssigned, c: subject } = student;

console.log(name); // Maria
console.log(classAssigned); // Turma B
console.log(subject); // Matemática
/**
 * ! OU
 */
 const student = {
  a: 'Maria',
  b: 'Turma B',
  c: 'Matematica',
};
const name = student.a;
console.log(name); // Maria

/**
* !exemplo 5
*/
const product = {
  name: 'Smart TV Crystal UHD',
  price: '1899.05',
  seller: 'Casas de Minas',
};

const printProductDetails = ({ name, price, seller }) => {
  console.log(`Promoção! ${name} por apenas ${price} é só aqui: ${seller}`);
};

printProductDetails(product); // Promoção! Smart TV Crystal UHD por apenas 1899.05 é só aqui: Casas de Minas

/**
* ! Para fixar 2
*/

const user = {
  name: 'Maria',
  age: 21,
  nationality: 'Brazilian',
};

const jobInfos = {
  profession: 'Software engineer',
  squad: 'Rocket Landing Logic',
  squadInitials: 'RLL',
};

const infos = {
  ...user,
  ...jobInfos,
}

const {name, age, nationality, profession, squad, squadInitials } = infos;

console.log(`Hi, my name is ${name}, I'm ${age} years old and I'm ${nationality}. I work as a ${profession} and my squad is ${squadInitials}-${squad}`);

/**
 * *Arrays Destructuring
* !para Fixar 3
*/
const saudacoes = ['Olá', (saudacao) => console.log(saudacao)];

const [saudacao, funcao] = saudacoes;
funcao(saudacao);
// saudacoes[1](saudacoes[0]); // Olá

// Produza o mesmo resultado acima, porém utilizando array destructuring
let comida = 'gato';
let animal = 'água';
let bebida = 'arroz';

// console.log(comida, animal, bebida); // arroz gato água

[comida, animal, bebida] = [bebida, comida, animal];
console.log(comida, animal, bebida);
// Utilizando array destructuring, faça com que os valores apareçam nas variáveis correspondentes ao seu verdadeiro tipo

let numerosPares = [1, 3, 5, 6, 8, 10, 12];

console.log(numerosPares); // [6, 8, 10, 12];

// Utilize array destructuring para produzir o resultado esperado pelo console.log abaixo

[,,, ...numerosPares] = numerosPares;

console.log(numerosPares); // [6, 8, 10, 12];
/**
 * *default Destructuring
* !para Fixar 4
*/
const getNationality = ({ firstName, nationality = 'Brazilian' }) => `${firstName} is ${nationality}`;

const person = {
  firstName: 'João',
  lastName: 'Jr II',
};

const otherPerson = {
  firstName: 'Ivan',
  lastName: 'Ivanovich',
  nationality: 'Russian',
};
//  const { nationality = 'Brazilian'} = person;
console.log(getNationality(otherPerson)); // Ivan is Russian
console.log(getNationality(person));

/**
 * *Object Property Shorthand
* !para Fixar 5
*/
const getPosition = (latitude, longitude) => ({
  latitude,
  longitude,
});

console.log(getPosition(-19.8157, -43.9542));