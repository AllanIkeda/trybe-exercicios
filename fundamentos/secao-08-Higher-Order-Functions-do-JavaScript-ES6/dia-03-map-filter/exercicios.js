  /**
//  *! exemplo 1:
//  */
//  const numbers = [19, 21, 30, 3, 45, 22, 15];

//  const verifyEven = (number) => number % 2 === 0;

//  const isEven = numbers.filter(verifyEven);

//  console.log(isEven); // [ 30, 22 ]

//  // Outra forma de ser realizada sem a necessidade de criar uma nova função.
//  const isEven2 = numbers.filter((number) => number % 2 === 0);

//  console.log(isEven2); // [ 30, 22 ]

//    /**
//  *! exemplo 2:
//  */
//  const objPeople = [
//   { name: 'José', age: 21 },
//   { name: 'Lucas', age: 19 },
//   { name: 'Maria', age: 16 },
//   { name: 'Gilberto', age: 18 },
//   { name: 'Vitor', age: 15 },
// ];

// const verifyAgeDrive = (arrayOfPeople) => (
//   arrayOfPeople.filter((people) => (people.age < 18))
// );

// console.log(verifyAgeDrive(objPeople));
// // [ { name: 'Maria', age: 16 }, { name: 'Vitor', age: 15 } ]
//    /**
//  *! exemplo 3:
//  */
//  const arrayMyStudents = ['Maria', 'Manuela', 'Jorge', 'Ricardo', 'Jorge'];

//  const removeStudentByName = (name, listStudents) =>
//    listStudents.filter((student) => student !== name);
//    // Filtra todos os estudantes que não têm o nome 'Ricardo' e retorna um array com eles. Na prática, remove o Ricardo do array.

//  const newListStudents = removeStudentByName('Jorge', arrayMyStudents);
//  console.log(newListStudents); // [ 'Maria', 'Manuela', 'Jorge', 'Wilson' ]

// Adicione o código do exercício aqui:
// Crie um array com strings no formato NOME_DO_LIVRO - GÊNERO_DO_LIVRO - NOME_DA_PESSOA_AUTORA
// De olho na dica 👀: Use a função map
/**
 *! exercicio 1:
 */
const expectedResult = [
  'As Crônicas de Gelo e Fogo - Fantasia - George R. R. Martin',
  'O Senhor dos Anéis - Fantasia - J. R. R. Tolkien',
  'Fundação - Ficção Científica - Isaac Asimov',
  'Duna - Ficção Científica - Frank Herbert',
  'A Coisa - Terror - Stephen King',
  'O Chamado de Cthulhu - Terror - H. P. Lovecraft',
];

const formatedBookNames = (array) => array.map((book) => `${book.name} - ${book.genre} - ${book.author.name}`);

console.log(formatedBookNames(books));

  /**
   *! exercicio 2:
 */
// Construa um array de objetos a partir do array de livros. Cada objeto deve conter uma propriedade author, com o nome da pessoa autora do livro, e uma propriedade age, com a idade dessa pessoa quando o livro foi lançado. O array deve ser ordenado por idade, ou seja, da pessoa mais jovem para a mais velha, considerando suas idades quando o livro foi lançado.
// De olho na dica 👀: use as funções map, sort


const expectedResult = [
  {
    age: 31,
    author: 'Isaac Asimov',
  },
  {
    age: 38,
    author: 'H. P. Lovecraft',
  },
  {
    age: 39,
    author: 'Stephen King',
  },
  {
    age: 43,
    author: 'George R. R. Martin',
  },
  {
    age: 45,
    author: 'Frank Herbert',
  },
  {
    age: 62,
    author: 'J. R. R. Tolkien',
  },
];

function nameAndAge() {
  // escreva seu código aqui
  return books.map((book) => {
    return {
      age: book.releaseYear - book.author.birthYear,
      author: book.author.name,
    }
  }).sort((a, b) => b.age - a.age);
}

// const sort = (nameAndAge) => nameAndAge.sort((a, b) => a.age - b.age);
console.log(nameAndAge());
  /**
 *! exercicio 3:
 */
// Crie um array com todos os objetos que possuem gênero ficção científica ou fantasia.
// De olho na dica 👀: use a função filter;
const expectedResult = [
  {
    id: 1,
    name: 'As Crônicas de Gelo e Fogo',
    genre: 'Fantasia',
    author: { name: 'George R. R. Martin', birthYear: 1948 },
    releaseYear: 1991
  },
  {
    id: 2,
    name: 'O Senhor dos Anéis',
    genre: 'Fantasia',
    author: { name: 'J. R. R. Tolkien', birthYear: 1892 },
    releaseYear: 1954
  },
  {
    id: 3,
    name: 'Fundação',
    genre: 'Ficção Científica',
    author: { name: 'Isaac Asimov', birthYear: 1920 },
    releaseYear: 1951
  },
  {
    id: 4,
    name: 'Duna',
    genre: 'Ficção Científica',
    author: { name: 'Frank Herbert', birthYear: 1920 },
    releaseYear: 1965
  }
];

function fantasyOrScienceFiction() {
  // escreva seu código aqui
  return books.filter((book) => book.genre === 'Fantasia' || book.genre === 'Ficção Científica');
}
console.log(fantasyOrScienceFiction());
  /**
 *! exercicio 4:
 */

//  Crie um array formado pelos livros com mais de 60 anos desde sua publicação. Esse array deve ser ordenado do livro mais velho ao mais novo.
// De olho na dica 👀: use as funções filter e sort
const expectedResult = [
  {
    id: 6,
    name: 'O Chamado de Cthulhu',
    genre: 'Terror',
    author: { name: 'H. P. Lovecraft', birthYear: 1890 },
    releaseYear: 1928,
  },
  {
    id: 3,
    name: 'Fundação',
    genre: 'Ficção Científica',
    author: { name: 'Isaac Asimov', birthYear: 1920 },
    releaseYear: 1951,
  },
  {
    id: 2,
    name: 'O Senhor dos Anéis',
    genre: 'Fantasia',
    author: { name: 'J. R. R. Tolkien', birthYear: 1892 },
    releaseYear: 1954,
  },
];

function oldBooksOrdered() {
  // escreva seu código aqui
  return books.filter((book) => 2020 - book.releaseYear >= 60).sort((a, b) => a.releaseYear - b.releaseYear);
}
console.log(oldBooksOrdered());
  /**
 *! exercicio 5:
 */
//  Crie um array em ordem alfabética apenas com os nomes de todas as pessoas autoras de ficção científica ou fantasia.
const expectedResult = [
  'Frank Herbert',
  'George R. R. Martin',
  'Isaac Asimov',
  'J. R. R. Tolkien',
];

function fantasyOrScienceFictionAuthors() {
  // escreva seu código aqui
  return books.filter((book) => book.genre === 'Fantasia' || book.genre === 'Ficção Científica').map((athor) => athor.author.name).sort();
}
console.log(fantasyOrScienceFictionAuthors());
  /**
 *! exercicio 6:
 */
// Crie um array com o nome de todos os livros com mais de 60 anos de publicação.
const expectedResult = [
  'O Senhor dos Anéis',
  'Fundação',
  'O Chamado de Cthulhu',
];

function oldBooks() {
  // escreva seu código aqu
 return books.filter((book) => 2022 - book.releaseYear > 60).map((book) => book.name);
}
console.log(oldBooks());
  /**
 *! exercicio 7:
 */
// Encontre o nome do livro escrito pela pessoa cujo nome registrado começa com três iniciais.
// De olho na dica 👀: cada inicial termina com um ponto.

const expectedResult = 'O Senhor dos Anéis';
const books = [
  {
    id: 1,
    name: 'As Crônicas de Gelo e Fogo',
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
      birthYear: 1892,
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
function authorWith3DotsOnName() {
  // escreva seu código aqui
  return books.find((book) => book.author.name.split(' ').filter((word) => word.endsWith('.')).length === 3).name;
}

console.log(authorWith3DotsOnName());