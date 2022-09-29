
// let eove = document.getElementById('elementoOndeVoceEsta');

// let pai = eove.parentElement;
// pai.style.color = 'blue';

// let filhodofilho = document.getElementById('primeiroFilhoDoFilho');
// filhodofilho.innerText = 'Acesse o primeiroFilhoDoFilho e adicione um texto a ele. Você se lembra dos vídeos da aula anterior, como fazer isso?';

// let primeiroF = pai.firstElementChild;

// let primeiroF2 = eove.previousElementSibling;

// let ultimo = eove.nextSibling;

// let terceiro = eove.nextElementSibling;

// let ultimo2 = pai.lastElementChild.previousElementSibling;

// let irmaoel = document.createElement('div');
// irmaoel.id = 'irmaoel';

// pai.appendChild(irmaoel);

// let filho = document.createElement('section');
// filho.id = 'filho-eove';

// eove.appendChild(filho);

// let filhoDoPrimeiroF = document.createElement('div');
// filhoDoPrimeiroF.id = 'filhoDoPrimeiroF';

// primeiroF.appendChild(filhoDoPrimeiroF);

// let ver = document.getElementById('filhoDoPrimeiroF').parentElement.parentElement.nextElementSibling;

// console.log(ver);


let pai = document.getElementById('pai');

let filhos = pai.childNodes;
for (let i = filhos.length - 1; i >= 0; i -= 1) {
  let caseF = filhos[i];
  if (caseF.id !== 'elementoOndeVoceEsta') {
    caseF.remove();
  }
}
let ultimo = document.getElementById('segundoEUltimoFilhoDoFilho');

ultimo.remove();