// ex1, ex2, ex3, ex4

// let info = {
//   personagem: 'Margarida',
//   origem: 'Pato Donald',
//   nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
// };

// info.recorrente = 'sim'
// console.log('Bem-vinda, '+ info.personagem);
// console.log(info['recorrente']);

// for (let key in info) {
//   console.log(info[key]);
// }

// let info2 = {
//   personagem: 'Tio Patinhas',
//   origem: 'Christmas on Bear Mountain, Dell’s Four Color Comics #178’',
//   nota: 'O último MacPatinhas',
//   recorrente: 'sim'
// }

// for (let key in info && info2) {
//   if (info[key] != info2[key]) {
//     console.log(info[key] + ' e ' + info2[key]);
//   }
//   if (info[key] === info2[key]) {
//     console.log('Ambos recorrente')
//   }
// }

// let leitor = {
//   nome: 'Julia',
//   sobrenome: 'Pessoa',
//   idade: 21,
//   livrosFavoritos: [
//     {
//       titulo: 'O Pior Dia de Todos',
//       autor: 'Daniela Kopsch',
//       editora: 'Tordesilhas',
//     },
//   ],
// };

// console.log('O livro favorito de ' + leitor['nome', 'sobrenome'] + ' se chama ' + leitor.livrosFavoritos[0].titulo);

// leitor.livrosFavoritos.push (
//   {
//     titulo: 'Harry Potter e o Prisioneiro de Azkaban',
//     autor: 'JK Rowling',
//     editora: 'Rocco',
//   }
// )

// console.log(leitor.nome + ' tem ' + leitor.livrosFavoritos.length + ' livros favoritos');


// ex function 1

// let verif = false;
//  function palindromo(palavra){
//   palind = palavra.split('').reverse('').join('');
//     if (palavra === palind) {
//       return verif = true;
//     }else{
//     return verif = false;
//     }
//  }

//  console.log(palindromo('desenvolvimento'));
//  console.log(palindromo('arara'));

// ex function 2

// function imaior (array){
//   let resp = 0;
//   for (let i in array) {
//     if (array[i] > array[resp]) {
//       resp = i;
//     }
//   }
//   return resp;
// }

// console.log(imaior([2, 3, 6, 7, 25, 10, 111]));

// function imaior (array){
//   let resp = 0;
//   for (let i in array) {
//     if (array[i] < array[resp]) {
//       resp = i;
//     }
//   }
//   return resp;
// }

// console.log(imaior([2, 4, -6, 7, 10, 0, -3]));

// function maior(palavras) {
//   let maiorPalavra = palavras[0];
//   for (let indice in palavras) {
//     if (maiorPalavra.lenght < palavras[indice].lenght) {
//       maiorPalavra = palavras[indice];
      
//     }
//   }
//   return maiorPalavra;
// }

// console.log(maior(['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana']));

function numRepetido(numeros) {
 
  let indice = 0;

  for (let i = 0; i < numeros.length; i += 1) {
    for (let j = 0; j < numeros.length; j += 1) {
      if (numeros[i] === numeros[j]) {
        
        indice = numeros[i];
      }
    }
  }
  return indice;
}

  console.log(numRepetido([2, 3, 7, 5, 8, 5, 3, 8, 6, 5, 8, 1, 5]));