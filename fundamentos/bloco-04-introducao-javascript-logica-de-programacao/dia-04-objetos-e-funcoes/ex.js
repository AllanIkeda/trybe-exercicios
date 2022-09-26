// let diasDaSemana = {
//   1: 'domingo',
//   2: 'segunda',
//   3: 'terça',
//   4: 'quarta',
//   5: 'quinta',
//   6: 'sexta',
//   7: 'sábado',
// };


// console.log(diasDaSemana['1']); // domingo

// let conta = {
//   agencia: '0000',
//   banco: {
//     cod: '012',
//     id: 4,
//     nome: 'TrybeBank',
//   },
// };

// let infoDoBanco = 'banco';
// console.log(conta[infoDoBanco]); // { cod: '012', id: 4, nome: 'TrybeBank' }
// console.log(conta[infoDoBanco]['nome']); // TrybeBank

// console.log(conta.agencia); // 0000
// console.log(conta['agencia']); // 0000

// console.log(conta.banco.cod); // 012
// console.log(conta['banco']['id']); // 4

// let usuario = {
//   id: 99,
//   email: 'jakeperalta@gmail.com',
//   infoPessoal: {
//     nome: 'Jake',
//     sobrenome: 'Peralta',
//     endereco: {
//       rua: 'Smith Street',
//       bairro: 'Brooklyn',
//       cidade: 'Nova Iorque',
//       estado: 'Nova Iorque',
//     },
//   },
// };

// console.log(usuario['id']); // 99
// console.log(usuario.email); // jakeperalta@gmail.com

// console.log(usuario.infoPessoal.endereco.rua); // Smith Street
// console.log(usuario['infoPessoal']['endereco']['cidade']); // Nova Iorque



// let moradores = [
//   {
//     nome: 'Luiza',
//     sobrenome: 'Guimarães',
//     andar: 10,
//     apartamento: 1005,
//   },
//   {
//     nome: 'William',
//     sobrenome: 'Albuquerque',
//     andar: 5,
//     apartamento: 502,
//   },
//   {
//     nome: 'Murilo',
//     sobrenome: 'Ferraz',
//     andar: 8,
//     apartamento: 804,
//   },
//   {
//     nome: 'Zoey',
//     sobrenome: 'Brooks',
//     andar: 1,
//     apartamento: 101,
//   },
// ];

// let primeiroMorador = moradores[0];
// console.log(primeiroMorador); // { nome: 'Luiza', sobrenome: 'Guimarães', andar: 10, apartamento: 1005 }
// console.log(primeiroMorador['andar']); // 10

// let ultimoMorador = moradores[moradores.length - 1];
// console.log(ultimoMorador); // { nome: 'Zoey', sobrenome: 'Brooks', andar: 1, apartamento: 101 }
// console.log(ultimoMorador.nome); // Zoey
// console.log(moradores);

// let cars = ['Saab', 'Volvo', 'BMW'];

// for (let index in cars) {
//   console.log(cars[index]);
// }

// let car = {
//   type: 'Fiat',
//   model: '500',
//   color: 'white',
// };

// for (let index in car) {
//   console.log(index, car[index]);
// }





// --------------------------------------------------------------------------------------------
// // ex1
// let player = {
//   name: 'Marta',
//   lastName: 'Silva',
//   age: '34',
//   medals: {
//     golden: 2,
//     silve: 3
//   }
// }

// console.log('a jogadora ' + player.name + ' possui ' + player.medals['golden'] + ' Medalhas de Ouro' + ' e ' + player.medals.silve + ' Medalhas de Prata');

// ex2

// let names = {
//   person1: 'João',
//   person2: 'Maria',
//   person3: 'Jorge',
// };

// for (key in names) {
//   console.log('Olá ' + names[key]);
// }

// let car = {
//   model: 'A3 Sedan',
//   manufacturer: 'Audi',
//   year: 2020
// };

// for( let key in car ) {
//   console.log(key + ': ' + car[key]);
// }

// ex3 funções

// function soma(a, b) {
//   return a + b;
// }

// function sub(a, b) {
//   return a - b;
// }

// function mult(a, b) {
//   return a * b;
// }

// function div(a, b) {
//   return a / b;
// }

// function mod(a, b) {
//   return a % b;
// }

// function maior(primeiroNum, segundoNum) {
//   if (primeiroNum > segundoNum) {
//     return primeiroNum + ' é maior que ' + segundoNum;
//   }else if (primeiroNum < segundoNum) {
//     return segundoNum + ' é maior que ' + primeiroNum;
//   }else {
//     return primeiroNum + ' é igual a ' + segundoNum;
//   }
// }
// console.log(maior(305, 305));

// function maior(primeiroNum=0, segundoNum=0, terceiroNum=0) {
//   if (primeiroNum > segundoNum && primeiroNum > terceiroNum) {
//     return primeiroNum +' é maior que '+ segundoNum + ' e maior que ' + terceiroNum;
//   }else if (segundoNum > primeiroNum && segundoNum > terceiroNum) { 
//     return segundoNum +' é maior que '+ primeiroNum +' e maior que ' + terceiroNum;
//   }else { 
//     return terceiroNum +' é maior que '+ primeiroNum +' e maior que '+ segundoNum;
//   }
// }

// console.log(maior(50, 32, 34));

// function num(n=0) {
//   if (n > 0){
//   return 'Positivo';
//   }else if (n < 0){
//     return 'Negativo';
//   }else if (n === 0) {
//     return 'zero';
//   }else {
//   return 'não é um numero valido';
//   }
// }

  

// console.log(num('h'));

// function triangulo (a, b, c){
//   let soma = a + b + c;
//   let posit = a > 0 && b > 0 && c > 0;
//   if (posit) {
//     if (soma === 180) {
//       return true;
//     }else {
//       return false;
//     }
//   }else {
//     return 'Angulo inválido';
//   }
// }

// console.log(triangulo(45, 45, 90));

