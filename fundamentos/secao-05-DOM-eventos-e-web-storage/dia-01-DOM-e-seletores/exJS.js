

function mudarTexto () {
  let paragrafo = document.getElementsByTagName('p')[1];
  paragrafo.innerHTML = 'ganhando um dinheirinho ai';
}

function bgTrybe (){
  let bg = document.getElementsByClassName('main-content')[0];
  bg.style.backgroundColor = 'rgb(30, 183, 32)';
}

function bgWhite() {
  let bga = document.getElementsByClassName('center-content')[0];
  bga.style.backgroundColor = 'white';
}

function h1correct() {
  let h1 = document.getElementsByTagName('h1')[0];
  h1.innerHTML = 'Exercício - JavaScript';
}

function upcase() {
  let paragrafoUp = document.getElementsByTagName('p')[0];
  paragrafoUp.innerHTML = paragrafoUp.innerHTML.toUpperCase();
}


// 6. Crie e execute uma função que exiba o conteúdo de todas as tags <p> no console.
//1
mudarTexto();
//2
bgTrybe();
//3
bgWhite();
//4
h1correct();
//5
upcase();
