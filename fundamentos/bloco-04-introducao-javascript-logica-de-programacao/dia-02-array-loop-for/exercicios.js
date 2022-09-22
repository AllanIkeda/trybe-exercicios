let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

// exercicio1

// for (let i = 0; i < numbers.length; i+= 1) {
//   console.log(numbers[i]);
// }

// exercicio2
// let soma = 0
// for (let i = 0; i < numbers.length; i += 1) {
//   soma += numbers[i]
// }

// console.log(soma);

// exercicio3
let div = 0
let soma = 0
for (let i = 0; i < numbers.length; i += 1) {
  soma += numbers[i]
  div += 1
}
console.log(soma / div);

