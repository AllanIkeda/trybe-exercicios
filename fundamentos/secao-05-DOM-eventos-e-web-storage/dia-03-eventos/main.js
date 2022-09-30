const firstLi = document.getElementById('first-li');
const secondLi = document.getElementById('second-li');
const thirdLi = document.getElementById('third-li');
const input = document.getElementById('input');
const myWebpage = document.getElementById('my-spotrybefy');
const Elementotech = document.querySelector('.tech');
// document.getElementsByClassName('tech')[0].style.transform = 'translateY(0)';

// - Copie esse arquivo e edite apenas ele;
//  - Note que uma das caixas está um pouco acima das outras. Por que isso ocorre?


// - Crie uma função que adicione a classe 'tech' ao elemento `li` quando for clicado.
//  - Deve existir apenas um elemento com a classe 'tech'. Como você faz isso?

function addTechLi(param) {
  const tech = document.querySelector('.tech');
  tech.classList.remove('tech');
  param.target.classList.add('tech');
  input.value = '';

}
firstLi.addEventListener('click', addTechLi);
secondLi.addEventListener('click', addTechLi);
thirdLi.addEventListener('click', addTechLi);
// - Crie uma função que, ao digitar na caixa de texto, altere o texto do elemento
// com a classe 'tech';
function inputador (txt){
  const tech = document.querySelector('.tech');
  tech.innerText = txt.target.value;

}
input.addEventListener( 'input', inputador);

// - Crie uma função que, ao clicar duas vezes em 'Meu top 3 do Spotrybefy', ele
// redirecione para alguma página;
//  - Que tal redirecionar para seu portfólio?
function pageMove () {
  window.location.replace('https://github.com/AllanIkeda/trybe-exercicios');

}

myWebpage.addEventListener('dblclick', pageMove);

// - Crie uma função que, ao passar o mouse sobre 'Meu top 3 do Spotrybefy', altere
// a cor do mesmo;
function colorOver(event) {
  event.target.style.color = 'blue';
  event.target.style.backgroundColor = 'grey'
}

function colorOut(event) {
  event.target.style.color ='unset';
  event.target.style.backgroundColor = 'unset';
}
myWebpage.addEventListener('mouseover', colorOver);
myWebpage.addEventListener('mouseout', colorOut);

// Segue abaixo um exemplo do uso de event.target:


function resetText(event) {
  // O Event é passado como um parâmetro para a função.
  event.target.innerText = 'Opção reiniciada';
  // O event possui várias propriedades, porém a mais usada é o event.target,
  // que retorna o objeto que disparou o evento.
}

firstLi.addEventListener('dblclick', resetText);

// Não precisa passar o parâmetro dentro da callback resetText. O próprio
// navegador fará esse trabalho por você, não é legal? Desse jeito, o
// event.target na nossa função retornará o objeto 'firstLi'.