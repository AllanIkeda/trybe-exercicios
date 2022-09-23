// exercicio 1

// let fatorial = 10;
// let resultado = fatorial

// for (let i = 1; i < 10; i += 1) {
//   resultado *= (fatorial - 1);
//   fatorial -= 1
// }
// console.log(resultado);


// exercicio2

let word = 'tryber';
let array = word.split('');
let arrayReversed = [];
// let arrayReversed = array.reverse();
for (let index = 0; index < array.length; index += 1) {
    arrayReversed.unshift (array[index]);
}

// console.log(arrayReversed);
console.log(arrayReversed.join(''));
console.log(arrayReversed);
