// exercicio 1

// let fatorial = 10;
// let resultado = fatorial

// for (let i = 1; i < 10; i += 1) {
//   resultado *= (fatorial - 1);
//   fatorial -= 1
// }
// console.log(resultado);

// //outro jeito
// let fatorial = 1;
// for(let index = 10; index > 0; index -= 1) {
//   fatorial *= index;
// }
// console.log(fatorial);



// exercicio2

// let word = 'tryber';
// let array = word.split('');
// let arrayReversed = [];
// let arrayReversed = array.reverse();
// for (let index = 0; index < array.length; index += 1) {
//     arrayReversed.unshift (array[index]);
// }

// console.log(arrayReversed);
// console.log(arrayReversed.join(''));
// console.log(arrayReversed);

// let = word = 'Trybe'
// let  invertida = ''

// for (let i = word.length - 1; i >= 0; i -= 1) {
//     invertida += word[i]
// }
// console.log(invertida);


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

// let array = ['java', 'javascript', 'python', 'html', 'css'];
// let contadorLetra = 0;
// let recebePalavra = '';
// for (let index = 0; index < array.length; index += 1) {
//   if(contadorLetra < array[index].length) {
//     contadorLetra = array[index].length;
//     recebePalavra = array[index];
//   }
// }
// console.log(contadorLetra);
// console.log(recebePalavra);
// let int = []
// cont = 0

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


//Escreva um programa que, dado um valor n qualquer, seja n > 1, imprima na tela um quadrado feito de asteriscos de lado de tamanho n. Por exemplo:

// let n = 6
// let aster = '*';
// let linha = '';

// for (let i = 0; i < n; i += 1) {
//   linha = linha + aster
//   console.log(linha);
// }

// // Faça o mesmo que antes, mas que imprima um triângulo retângulo com 5 asteriscos de base. Por exemplo:

// let n = 6
// let aster = '*';
// let linha = '';

// for (let i = 0; i < n; i += 1) {
//   linha = linha + aster
//   console.log(linha);
// }