// /**
//  * ! exemplo 1
//  **estrutura
//  */
// reduce((accumulator, currentValue, currentIndex, array) => { /* ... */ }, initialValue)
// array.reduce((acc, curr) => {
//   // escopo de execução da função
// }, valorInicial)
// /**
//  * ! exemplo 2
//  * */
// const numbers = [1, 32, 44, 2, 3];
// const iteracoesDoReduce = numbers.reduce((acc, curr) => {
//   console.log(`valor atual é ${curr}`);
//   // Antes da primeira iteração o valor de início do `acc` é o valor no index 0 do array, e o valor de início de `curr` é o valor no index 1 do array.
//   // Iteração 1: valor do acc é 1 e o de curr é 32;
//   // Após a primeira iteração, o valor de `acc` muda e passa a acumular agora o resultado do retorno da callback (acc + curr).
//   // Iteração 2: valor do acc é 33 e o de curr é 44;
//   // Acontece então uma segunda iteração, e `curr` agora assume o valor do index na sequência do array, no caso o valor do segundo index e `acc` segue armazenando os retornos.
//   // Iteração 3: valor do acc é 77 e o de curr é 2;
//   // Iteração 4: valor do acc é 79 e o de curr é 3;
//   // Valor final de `acc`é 82 e `curr` para no 3.
//   return acc + curr // Ao fim das iterações podemos ver que o `acc` armazenou o resultado total do retorno da função.
// });
// console.log(`O resultado final é ${iteracoesDoReduce}`);
// // por fim, esse console.log imprime o retorno final da nossa função.
// /**
// * ! exemplo 3
// * */
// const numberrs = [1, 32, 44, 2, 3];
// const totalSum = numberrs.reduce((acc, curr) => {
//   console.log(`valor do acc é ${acc} e o de curr é ${curr}`);
//   // Iteração 1: valor do acc é 30 e o de curr é 1
//   // Iteração 2:valor do acc é 31 e o de curr é 32
//   // Iteração 3: valor do acc é 63 e o de curr é 44
//   // Iteração 4: valor do acc é 107 e o de curr é 2
//   // Iteração 5: valor do acc é 109 e o de curr é 3
//   // Valor final de `acc`é 112 e `curr` para no 3
//   return acc + curr;
// }, 30); // O `valorInicial` é 30, ou seja, `acc` antes de executar a primeira iteração já está armazenando esse valor.

// console.log(`valor final do acc é ${totalSum}`);
//      // por fim, esse `console.log` imprime o retorno da nossa função, que é o valor final de `acc` após cada uma das 5 iterações, tendo iniciado com valor 30.
//        /**
//  * ! exemplo 4
// //  * */ usando uma variavel externa
// const nuumbers = [1, 32, 44, 2, 3];
// const sumNumbers = (acc, curr) => acc + curr;
// const totallSum = nuumbers.reduce(sumNumbers, 30);
// console.log(totallSum); //112

// /**
// * ! exemplo 5
// * */
// const numberss = [50, 85, -30, 3, 15];

// const getBigger = (bigger, number) => ((bigger > number) ? bigger : number);

// const bigger = numberss.reduce(getBigger, 100);
// console.log(bigger); // 85

// /**
// * ! exemplo 6
// * */
// const nums = [18, 19, 23, 53, 4, 5, 76, 23, 54];
//  const evens = (num) => num % 2 === 0;
//  const somador = (acumulador, num) => acumulador + num;

//  const reduc = (array) => array.filter(evens).reduce(somador);

//  console.log(reduc(nums));
//  /**
//   * * outra solução
//   */
//   const nnumbers = [18, 19, 23, 53, 4, 5, 76, 23, 54];

//   const sumPair = (accumulator, number) => (
//     (number % 2 === 0) ? accumulator + number : accumulator
//   );

//   const sumNumbers = (array) => array.reduce(sumPair, 0);

//   console.log(sumNumbers(nnumbers)); // 152

//   /**
// * ! exemplo 7
// * */
//   const estudantes = [
//     {
//       nome: 'Jorge',
//       sobrenome: 'Silva',
//       idade: 14,
//       turno: 'Manhã',
//       materias: [
//         { name: 'Matemática', nota: 67 },
//         { name: 'Português', nota: 79 },
//         { name: 'Química', nota: 70 },
//         { name: 'Biologia', nota: 65 },
//       ],
//     },
//     {
//       nome: 'Mario',
//       sobrenome: 'Ferreira',
//       idade: 15,
//       turno: 'Tarde',
//       materias: [
//         { name: 'Matemática', nota: 59 },
//         { name: 'Português', nota: 80 },
//         { name: 'Química', nota: 78 },
//         { name: 'Biologia', nota: 92 },
//       ],
//     },
//     {
//       nome: 'Jorge',
//       sobrenome: 'Santos',
//       idade: 15,
//       turno: 'Manhã',
//       materias: [
//         { name: 'Matemática', nota: 76 },
//         { name: 'Português', nota: 90 },
//         { name: 'Química', nota: 70 },
//         { name: 'Biologia', nota: 80 },
//       ],
//     },
//     {
//       nome: 'Maria',
//       sobrenome: 'Silveira',
//       idade: 14,
//       turno: 'Manhã',
//       materias: [
//         { name: 'Matemática', nota: 91 },
//         { name: 'Português', nota: 85 },
//         { name: 'Química', nota: 92 },
//         { name: 'Biologia', nota: 90 },
//       ],
//     },
//     {
//       nome: 'Natalia',
//       sobrenome: 'Castro',
//       idade: 14,
//       turno: 'Manhã',
//       materias: [
//         { name: 'Matemática', nota: 70 },
//         { name: 'Português', nota: 70 },
//         { name: 'Química', nota: 60 },
//         { name: 'Biologia', nota: 50 },
//       ],
//     },
//     {
//       nome: 'Wilson',
//       sobrenome: 'Martins',
//       idade: 14,
//       turno: 'Manhã',
//       materias: [
//         { name: 'Matemática', nota: 80 },
//         { name: 'Português', nota: 82 },
//         { name: 'Química', nota: 79 },
//         { name: 'Biologia', nota: 75 },
//       ],
//     },
//   ];
//   const getBestClass = (acc, materia) => (acc.nota > materia.nota) ? acc : materia;

//   const reportBetter = (students) => students.map((student) => ({
//     name: student.nome,
//     materia: student.materias.reduce(getBestClass).name,
//   }));

//   console.log(reportBetter(estudantes));

/**
 * ! exercicio 1
 * *Utilize o reduce para transformar uma matriz em um array.*/

 const arrays = [["1", "2", "3"], [true], [4, 5, 6]];

 function flatten() {
   // escreva seu código aqui
   return arrays.reduce((acc, curr) => acc.concat(curr));
 }
 console.log(flatten());
 /**
  * ! exercicio 2
  * *Considere o seguinte array e manipule-o utilizando reduce para fazer o que é pedido: */



 // Adicione o código do exercício aqui:
 /**
  *  *Crie uma string com os nomes de todas as pessoas autoras. */ // { id: 1, name: "As Crônicas de Gelo e Fogo", genre: "Fantasia", author: { name: "George R. R. Martin", birthYear: 1948, }, releaseYear: 1991, },

 const expectedResult1 =
   "George R. R. Martin, J. R. R. Tolkien, Isaac Asimov, Frank Herbert, Stephen King, H. P. Lovecraft.";
   const books = [
     {
       id: 1,
       name: "As Crônicas de Gelo e Fogo",
       genre: "Fantasia",
       author: {
         name: "George R. R. Martin",
         birthYear: 1948,
       },
       releaseYear: 1991,
     },
     {
       id: 2,
       name: "O Senhor dos Anéis",
       genre: "Fantasia",
       author: {
         name: "J. R. R. Tolkien",
         birthYear: 1892,
       },
       releaseYear: 1954,
     },
     {
       id: 3,
       name: "Fundação",
       genre: "Ficção Científica",
       author: {
         name: "Isaac Asimov",
         birthYear: 1920,
       },
       releaseYear: 1951,
     },
     {
       id: 4,
       name: "Duna",
       genre: "Ficção Científica",
       author: {
         name: "Frank Herbert",
         birthYear: 1920,
       },
       releaseYear: 1965,
     },
     {
       id: 5,
       name: "A Coisa",
       genre: "Terror",
       author: {
         name: "Stephen King",
         birthYear: 1947,
       },
       releaseYear: 1986,
     },
     {
       id: 6,
       name: "O Chamado de Cthulhu",
       genre: "Terror",
       author: {
         name: "H. P. Lovecraft",
         birthYear: 1890,
       },
       releaseYear: 1928,
     },
   ];
 function reduceNames() {
   // escreva seu código aqui
   const objAuthor = books.map((book) => book.author); // { name: "George R. R. Martin", birthYear: 1948, }
   const arrayNomes = objAuthor.reduce((acc, curr) => `${acc} ${curr.name}. `, '');
   return arrayNomes;
 }
  console.log(reduceNames());
 /**
  *  *Calcule a média de idade que as pessoas autoras tinham quando seus respectivos livros foram lançados. */

  const expectedResult2 = 43;
  const books2 = [
   {
     id: 1,
     name: "As Crônicas de Gelo e Fogo",
     genre: "Fantasia",
     author: {
       name: "George R. R. Martin",
       birthYear: 1948,
     },
     releaseYear: 1991,
   },
   {
     id: 2,
     name: "O Senhor dos Anéis",
     genre: "Fantasia",
     author: {
       name: "J. R. R. Tolkien",
       birthYear: 1892,
     },
     releaseYear: 1954,
   },
   {
     id: 3,
     name: "Fundação",
     genre: "Ficção Científica",
     author: {
       name: "Isaac Asimov",
       birthYear: 1920,
     },
     releaseYear: 1951,
   },
   {
     id: 4,
     name: "Duna",
     genre: "Ficção Científica",
     author: {
       name: "Frank Herbert",
       birthYear: 1920,
     },
     releaseYear: 1965,
   },
   {
     id: 5,
     name: "A Coisa",
     genre: "Terror",
     author: {
       name: "Stephen King",
       birthYear: 1947,
     },
     releaseYear: 1986,
   },
   {
     id: 6,
     name: "O Chamado de Cthulhu",
     genre: "Terror",
     author: {
       name: "H. P. Lovecraft",
       birthYear: 1890,
     },
     releaseYear: 1928,
   },
 ];
  function averageAge() {
    // escreva seu código aqui
    const totalAuthor = books2.length;
    const sumAges = books2.reduce((acc, curr) => acc + (curr.releaseYear - curr.author.birthYear), 0);
    return sumAges / totalAuthor;
  }
  console.log(averageAge());

  /**
  *  *Encontre o livro com o maior nome.*/

   const expectedResult3 = {
     id: 1,
     name: 'As Crônicas de Gelo e Fogo',
     genre: 'Fantasia',
     author: {
       name: 'George R. R. Martin',
       birthYear: 1948,
     },
     releaseYear: 1991,
   };
  const books3 = [
   {
     id: 1,
     name: "As Crônicas de Gelo e Fogo",
     genre: "Fantasia",
     author: {
       name: "George R. R. Martin",
       birthYear: 1948,
     },
     releaseYear: 1991,
   },
   {
     id: 2,
     name: "O Senhor dos Anéis",
     genre: "Fantasia",
     author: {
       name: "J. R. R. Tolkien",
       birthYear: 1892,
     },
     releaseYear: 1954,
   },
   {
     id: 3,
     name: "Fundação",
     genre: "Ficção Científica",
     author: {
       name: "Isaac Asimov",
       birthYear: 1920,
     },
     releaseYear: 1951,
   },
   {
     id: 4,
     name: "Duna",
     genre: "Ficção Científica",
     author: {
       name: "Frank Herbert",
       birthYear: 1920,
     },
     releaseYear: 1965,
   },
   {
     id: 5,
     name: "A Coisa",
     genre: "Terror",
     author: {
       name: "Stephen King",
       birthYear: 1947,
     },
     releaseYear: 1986,
   },
   {
     id: 6,
     name: "O Chamado de Cthulhu",
     genre: "Terror",
     author: {
       name: "H. P. Lovecraft",
       birthYear: 1890,
     },
     releaseYear: 1928,
   },
 ];
   function longestNamedBook() {
     // escreva seu código aqui
     return books3.reduce((acc, curr) => acc.name.length > curr.name.length ? acc : acc = curr)
   }
 console.log(longestNamedBook());

 /**
  * ! exercicio 3
  * *Dado o array de nomes, utilize o reduce para retornar a quantidade de vezes em que aparece a letra a, maiúscula ou minúscula. */

  const names = [
   'Aanemarie', 'Adervandes', 'Akifusa',
   'Abegildo', 'Adicellia', 'Aladonata',
   'Abeladerco', 'Adieidy', 'Alarucha',
 ];

 const expectedResult = 20;

 function containsA() {
   // escreva seu código aqui
   let resultA = 0;
   names.forEach(word => {
     const separa = word.split('');
     resultA += separa.reduce((acc, curr) => curr.toLocaleLowerCase() === 'a' ? acc + 1: acc, 0);
     //   if (curr === 'a' || curr === 'A') {
     //     return acc + 1;
     //   }
     //   return acc;
     // }, 0);
   });
   return resultA;
 }
 console.log(containsA());

 /**
  * ! exercicio 4
  * *Para o próximo exercício você deve criar um novo array de objetos a partir das informações de students e grades,
  * *onde cada objeto desse novo array terá o formato { name: nome do aluno, average: media das notas }.
  * *Para isso vamos assumir que a posição 0 de grades refere-se ao estudante na posição 0 de students.
  * *Para resolver este exercício, além de reduce, será necessário utilizar também a função map.
  * ?De olho na dica 👀: Você pode acessar o index do array dentro de map, e você pode ver o objeto esperado na constante expected. */

  const students = ['Pedro Henrique', 'Miguel', 'Maria Clara'];
  const grades = [[9, 8, 10, 7, 5], [10, 9, 9, 10, 8], [10, 7, 10, 8, 9]];

  function studentAverage() {
    // escreva seu código aqui
    return students.map((student, i) => ({
      name: student,
      average: grades[i]
      .reduce((acc, currGrade) => acc + currGrade, 0) / grades[i].length
    }));
  }
 console.log(studentAverage());
  const expected = [
    { name: 'Pedro Henrique', average: 7.8 },
    { name: 'Miguel', average: 9.2 },
    { name: 'Maria Clara', average: 8.8 },
  ];