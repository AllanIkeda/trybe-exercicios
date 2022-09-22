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
// let div = 0
// let soma = 0
// for (let i = 0; i < numbers.length; i += 1) {
//   soma += numbers[i]
//   div += 1
// }
// console.log(soma / div);

// exercicio4

// let div = 0
// let soma = 0

// for (let i = 0; i < numbers.length; i += 1) { 
//   soma += numbers[i]
//   div += 1
// }
// if  ((soma / div) > 20) {
//   console.log('Valor maior que 20')
// }else{
//   console.log("valor menor que 20");
// }

// exercicio5
// let maior = 0;

// for (let n of numbers) {
//   if ( n > maior ) {
//     maior = n;
//   }
// }console.log(maior);

// exercicio6

// let cont = 0;
// let resp = '';
// for (let n of numbers) {
//   if (n % 2 == 1) {
//     cont += 1;
//   resp = 'Possui ' + cont + ' numeros Impares'
//   }else {
//     resp = 'não possui numeros impares'
//   }
// }
// console.log(resp)
//
// exercicio7

let menor = 0;

for ( let n of numbers ) {
  if ( menor == 0 ) {
    menor = n;
  }else if ( menor > n ) {
    menor = n;
  }
}
console.log('o menor numero é o ' + menor);
