/**
 *! exemplo 1:
 */
// const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

const multipliesFor2 = (element) => {
  console.log(`${element} * 2: ${element * 2}`);
};

// numbers.forEach(multipliesFor2);

/**
 *! exemplo 2:
 */

const names = ['Bianca', 'Camila', 'Fernando', 'Ana Roberta'];

const convertToUpperCase = (name, index, array) => {
  names[index] = name.toUpperCase();
};

names.forEach(convertToUpperCase);
// console.log(names); // [ 'BIANCA', 'CAMILA', 'FERNANDO', 'ANA ROBERTA' ]

/**
 *! para Fixar 1:
 */

 const emailListInData = [
  'roberta@email.com',
  'paulo@email.com',
  'anaroberta@email.com',
  'fabiano@email.com',
];

const showEmailList = (email) => {
  // console.log(`O email ${email} esta cadastrado em nosso banco de dados!`);
};

// emailListInData.forEach(showEmailList);

/**
 *! .find 1:
 */
// const numbers = [19, 21, 30, 3, 45, 22, 15];

const verifyEven = (number) => number % 2 === 0;

const isEven = numbers.find(verifyEven);

// console.log(isEven); // 30

// console.log(verifyEven(9)); // False
// console.log(verifyEven(14)); // True

// Outra forma de ser realizada sem a necessidade de criar uma nova função.
const isEven2 = numbers.find((number) => number % 2 === 0);

// console.log(isEven2); // 30
/**
 *! para Fixar 1:
 */
 const numbers = [19, 21, 32, 3, 45, 22, 15];

 const findDivisibleBy3And5 = (number) => number % 3 === 0 && number % 5 === 0 ? true : false;

 const isOdd = numbers.find(findDivisibleBy3And5)

//  console.log(isOdd);

/**
 *! para Fixar 2:
 */
 const namess = ['João', 'Irene', 'Fernando', 'Maria'];

const findNameWithFiveLetters = () => {

  return namess.find((param) => param.length === 5);
};

// console.log(findNameWithFiveLetters());

/** 31031685
 *! para Fixar 3:
 */

const musicas = [
  { id: '31031685', title: 'Partita in C moll BWV 997' },
  { id: '31031686', title: 'Toccata and Fugue, BWV 565' },
  { id: '31031687', title: 'Chaconne, Partita No. 2 BWV 1004' },
];

function findMusic(id) {

  return musicas.find((music) =>  music.id === id);
};

// console.log(findMusic('31031685'));

/**
 *! some & every exemplo 1:
 */
 const listNames = ['Maria', 'Manuela', 'Jorge', 'Ricardo', 'Wilson'];

 const verifyFirstLetter = (letter, names) => names.some((name) => name[0] === letter);

//  console.log(verifyFirstLetter('J', listNames)); // true
//  console.log(verifyFirstLetter('x', listNames)); // false

 /**
 *! some & every exemplo 1:
 */

 const grades = {
  portugues: 'Aprovado',
  matematica: 'Aprovado',
  ingles: 'Aprovado',
};

const verifyGrades = (studentGrades) => (
  Object.values(studentGrades).every((grade) => grade === 'Aprovado')
);

// console.log(verifyGrades(grades));
 /**
 *! para fixar 1:
 */
const nnames = ['Mateus', 'José', 'Ana', 'Cláudia', 'Bruna'];

const hasName = (arr, name) => {
  return arr.some(name => name === 'Ana');
};

// console.log(hasName(nnames, 'Ana'));
 /**
 *! para fixar 2:
 */
const people = [
  { name: 'Mateus', age: 18 },
  { name: 'José', age: 19 },
  { name: 'Ana', age: 23 },
  { name: 'Cláudia', age: 20 },
  { name: 'Bruna', age: 19 },
];

const verifyAges = (arr, minimumAge) => {
 return arr.every((idade) => idade.age >= minimumAge);
};
// console.log(verifyAges(people, 18));


const peeople = [
  { name: 'Mateus', age: 18 },
  { name: 'José', age: 16 },
  { name: 'Ana', age: 23 },
  { name: 'Cláudia', age: 20 },
  { name: 'Bruna', age: 19 },
];

const comparador = (peeople) => {
  if (age < ageb)
  return -1;

};

// peeople.sort((a, b) => a.age - b.age);
 /**
 *! exercicio 1:
 */
const books = [
  {
    id: 1,
    name: 'As Crônicas de Gelo e Fog',
    genre: 'Fantasia',
    author: {
      name: 'George R. R. Martin',
      birthYear: 1948,
    },
    releaseYear: 1991,
  },
  {
    id: 2,
    name: 'O Senhor dos Anéis',
    genre: 'Fantasia',
    author: {
      name: 'J. R. R. Tolkien',
      birthYear: 1948,
    },
    releaseYear: 1954,
  },
  {
    id: 3,
    name: 'Fundação',
    genre: 'Ficção Científica',
    author: {
      name: 'Isaac Asimov',
      birthYear: 1920,
    },
    releaseYear: 1951,
  },
  {
    id: 4,
    name: 'Duna',
    genre: 'Ficção Científica',
    author: {
      name: 'Frank Herbert',
      birthYear: 1920,
    },
    releaseYear: 1965,
  },
  {
    id: 5,
    name: 'A Coisa',
    genre: 'Terror',
    author: {
      name: 'Stephen King',
      birthYear: 1947,
    },
    releaseYear: 1986,
  },
  {
    id: 6,
    name: 'O Chamado de Cthulhu',
    genre: 'Terror',
    author: {
      name: 'H. P. Lovecraft',
      birthYear: 1890,
    },
    releaseYear: 1928,
  },
];

// Adicione o código do exercício aqui:
// function authorBornIn1947() {
//   // escreva aqui o seu código]
//   return  books.find( book => book.author.birthYear === 1947).author.name;
// }

// console.log(authorBornIn1947(books));

/**
 *! exercicio 2:
 */

//  function smallerName() {
//   let nameBook;
//   // escreva aqui o seu código
//  books.forEach((book) => !nameBook || book.name.length < nameBook.length ? nameBook = book : nameBook)
//   // Variável nameBook que receberá o valor do menor nome;
//   return nameBook;
// }
// console.log(smallerName(books));
/**
 *! exercicio 3:
 */
// const expectedResult = {
//   id: 1,
//   name: 'As Crônicas de Gelo e Fogo',
//   genre: 'Fantasia',
//   author: {
//         name: 'George R. R. Martin',
//     birthYear: 1948,
//   },
//     releaseYear: 1991,
// };
// function getNamedBook() {
//   // escreva seu código aqui
//   return books.find((book) => book.name.length === 26)
// }
// console.log(getNamedBook(books));
/**
 *! exercicio 4:
 */
// function booksOrderedByReleaseYearDesc() {
//   // escreva aqui seu código
//    return books.sort((a, b) => b.releaseYear - a.releaseYear);
// }

// console.log(booksOrderedByReleaseYearDesc(books));

 /**
 *! exercicio 5:
 */
//  const expectedResult = false;

//  function everyoneWasBornOnSecXX() {
//    // escreva seu código aqui
//     return books.every((book) => book.author.birthYear > 1900)
//  }

//  console.log(everyoneWasBornOnSecXX(books));

  /**
 *! exercicio 6:
 */
//  const expectedResult = true;

//  function someBookWasReleaseOnThe80s() {
//    // escreva seu código aqui
//    return books.some((book) => book.releaseYear >= 1980 && book.releaseYear <= 1989)
//  }
//  console.log(someBookWasReleaseOnThe80s(books));
  /**
 *! exercicio 7:
 */
 const expectedResult = false;
 function authorUnique() {
   return books.every((book) => !books.some((bookSome) => bookSome.author.birthYear === book.author.birthYear && bookSome.author.name !== book.author.name));
 }
 console.log(authorUnique(books));