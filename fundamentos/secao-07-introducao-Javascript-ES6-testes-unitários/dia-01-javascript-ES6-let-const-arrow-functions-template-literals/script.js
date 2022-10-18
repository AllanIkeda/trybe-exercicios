function testingScope(escopo) {
  if (escopo === true) {
    let ifScope = 'Não devo ser utilizada fora do meu escopo (if)';
    ifScope = ifScope + ' ótimo, fui utilizada no escopo !';
    console.log(ifScope);
  } else {
    let elseScope = 'Não devo ser utilizada fora do meu escopo (else)';
    console.log(elseScope);
  }
}
testingScope(true);

const array = [13, 3, 4, 10, 7, 2];
const sortOddsAndEvens = () => {
  for (let index = 1; index < array.length; index += 1) {
    for (let index2 = 0; index2 < index; index2 += 1) {
      if (array[index] < array[index2]) {
        let position = array[index];
        array[index] = array[index2];
        array[index2] = position;
      }
    }
  }
  console.log(array);
}
sortOddsAndEvens();
const oddsAndEvens = [13, 3, 4, 10, 7, 2];
const ordena = () => {
  const ordenada = oddsAndEvens.sort((a, b) => a - b);
  return ordenada;
};
console.log(ordena());
const fatorial = (n) => {
  let resultado = 1
  for (let index = n; index > 1; index -= 1) {
    resultado *= index;
  }
  return resultado;
};
console.log(fatorial(3));
let longestWord = ('Antônio foi ao banheiro e não sabemos o que aconteceu umapalavramaiorvamosver'); // retorna 'aconteceu'
let array = [];
let stringv = '';
const maiorPalavra = (frase) => {
  array = frase.split(' ');
  for (const iterator of array) {
    if (iterator.length > stringv.length) {
      stringv = iterator;
    }
  }
  return stringv;
}
console.log(maiorPalavra(longestWord));
let getCont = document.getElementById('cont');
const getBtn = document.getElementById('btn');
cont = 0;
console.log(getCont);
console.log(getBtn);
getBtn.addEventListener('click', () => {
  cont += 1;
  getCont.innerHTML = cont;
});
const substituaX = (nome) => {
  const frase = 'Tryber X Aqui';
  const fraseArray = frase.split(' ');
  for (let index = 0; index < fraseArray.length; index += 1) {
    if (fraseArray[index] === 'X') {
      fraseArray[index] = nome;
    }
  }
  return fraseArray.join(' ');
}
const minhasSkills = (returnsubstitua) => {
  const skills = ['JavaScript', 'HTML', 'CSS'];
  return `${returnsubstitua}.
  Minhas três principais habilidades são: ${skills[0]}, ${skills[1]} e ${skills[2]}`;
}
console.log(minhasSkills(substituaX('ala')));