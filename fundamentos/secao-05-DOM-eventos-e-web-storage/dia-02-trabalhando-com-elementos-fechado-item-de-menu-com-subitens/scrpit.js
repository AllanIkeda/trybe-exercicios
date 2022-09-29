
let eove = document.getElementById('elementoOndeVoceEsta');

let pai = eove.parentElement;
pai.style.color = 'blue';

let filhodofilho = document.getElementById('primeiroFilhoDoFilho');
filhodofilho.innerText = 'Acesse o primeiroFilhoDoFilho e adicione um texto a ele. Você se lembra dos vídeos da aula anterior, como fazer isso?';

let primeiroF = pai.firstElementChild;

let primeiroF2 = eove.previousElementSibling;

let ultimo = eove.nextSibling;

let terceiro = eove.nextElementSibling;

let ultimo2 = pai.lastElementChild.previousElementSibling;

