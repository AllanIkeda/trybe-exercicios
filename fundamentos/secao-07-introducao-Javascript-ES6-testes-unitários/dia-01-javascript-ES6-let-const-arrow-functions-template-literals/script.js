// testando variaveis
// function testingScope(escopo) {
//   if (escopo === true) {
//     const ifScope = 'Não devo ser utilizada fora do meu escopo (if)';
//     ifScope = ifScope + ' ótimo, fui utilizada no escopo !';
//     console.log(ifScope);
//   } else {
//     let elseScope = 'Não devo ser utilizada fora do meu escopo (else)';
//     console.log(elseScope);
//   }
//   // console.log(ifScope + ' o que estou fazendo aqui ? :O');
// }

// testingScope(true);

const oddsAndEvens = [13, 3, 4, 10, 7, 2];

const sortArrayBonus = (array) => {
  const sortOddsAndEvens = array.sort((a, b) => a - b);
  return sortOddsAndEvens;
};

const sortedArrayBonus = sortArrayBonus(oddsAndEvens);
console.log(`Os números ${sortedArrayBonus} se encontram ordenados de forma crescente!`);


// const oddsAndEvens = [13, 3, 4, 10, 7, 2];

// console.log(`Os números ${oddsAndEvens.sort((a, b) => a - b)} se encontram ordenados de forma crescente!`);

const factorial = (N) => {
  let result = 1;
  for (let i = 2; i <= N; i += 1) {
    result *= i;
  }
  return `o fatorial de ${N} é ${result}`;
}
console.log(factorial(4));

const fator = n => n > 1 ? n * fator (n - 1) : 1;
console.log(fator(40));