   /*
      Aqui você vai modificar os elementos já existentes utilizando apenas as funções:
      - document.getElementById()
      - document.getElementsByClassName()
      - document.getElementsByTagName()
      3. Crie e execute uma função que mude a cor do quadrado vermelho para branco.
      4. Crie e execute uma função que corrija o texto da tag <h1>.
      5. Crie e execute uma função que modifique o texto da primeira tag <p> para maiúsculo.
      6. Crie e execute uma função que exiba o conteúdo de todas as tags <p> no console.
      */

function mudarTexto () {
  let paragrafo = document.getElementsByTagName('p')[1];
  paragrafo.innerHTML = 'ganhando um dinheirinho ai';
}

function bgTrybe (){
  let bg = document.getElementsByClassName('main-content')[0];
  bg.style.backgroundColor = 'rgb(30, 183, 32)';
}


//1
mudarTexto();
//2
bgTrybe();
//3
