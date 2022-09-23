// exercicio 1

// let fatorial = 10;
// let resultado = fatorial

// for (let i = 1; i < 10; i += 1) {
//   resultado *= (fatorial - 1);
//   fatorial -= 1
// }
// console.log(resultado);


// exercicio2

// let word = 'tryber';
// let array = word.split('');
// let arrayReversed = [];
// // let arrayReversed = array.reverse();
// for (let index = 0; index < array.length; index += 1) {
//     arrayReversed.unshift (array[index]);
// }

// // console.log(arrayReversed);
// console.log(arrayReversed.join(''));
// console.log(arrayReversed);

//exercicio3

// let array = ['java', 'javascript', 'python', 'html', 'css'];
// let menor = array[0];
// let maior = array[0];

// for (let i = 0; i < array.length; i+= 1) {
//   if (array[i].length > maior.length) {
//     maior = array[i];
//   }
// }
// for (let i = 0; i < array.length; i+= 1) {
//   if (array[i].length < menor.length) {
//     menor = array[i];
//   }
// }

// console.log(maior);
// console.log(menor);
let int = []
cont = 0

for (let index = 2; index <= 50 ; index += 1) {
  let primo = true;
  for (let div = 2; div < index; div += 1) {
   if ( index % div === 0 ) {
    primo = false;
        
  }
}
  if (primo) {
  cont = index;
  int.push(index); 
  }
}

console.log(int);
console.log(cont);


