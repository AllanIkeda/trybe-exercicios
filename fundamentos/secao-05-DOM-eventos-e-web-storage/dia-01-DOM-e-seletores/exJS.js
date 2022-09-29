
//1. Crie e execute uma função que mude o texto na tag `<p>-----</p>`, para uma descrição de como você se vê daqui a 2 anos. (Não gaste tempo pensando no texto e sim realizando o exercício)
function mudarTexto () {
  let paragrafo = document.getElementsByTagName('p')[1];
  paragrafo.innerHTML = 'ganhando um dinheirinho ai';
}
//2. Crie e execute uma função que mude a cor do quadrado amarelo para o verde da Trybe (rgb(76,164,109)).
function bgTrybe (){
  let bg = document.getElementsByClassName('main-content')[0];
  bg.style.backgroundColor = 'rgb(30, 183, 32)';
}
// 3. Crie e execute uma função que mude a cor do quadrado vermelho para branco.
function bgWhite() {
  let bga = document.getElementsByClassName('center-content')[0];
  bga.style.backgroundColor = 'white';
}
//4. Crie e execute uma função que corrija o texto da tag <h1>.
function h1correct() {
  let h1 = document.getElementsByTagName('h1')[0];
  h1.innerHTML = 'Exercício - JavaScript';
}
//5. Crie e execute uma função que modifique o texto da primeira tag <p> para maiúsculo.
function upcase() {
  let paragrafoUp = document.getElementsByTagName('p')[0];
  paragrafoUp.innerHTML = paragrafoUp.innerHTML.toUpperCase();
}
//6. Crie e execute uma função que exiba o conteúdo de todas as tags <p> no console.
function showConsole() {
  let array = document.getElementsByTagName('p');
  for (let i = 0; i < array.length; i += 1){
  console.log(array[i].innerText);
  }

}

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
//6
showConsole();
