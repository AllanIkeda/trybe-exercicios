// const button = document.getElementById('add-button');
// const input = document.getElementById('phrases-input');
// const list = document.getElementById('phrases-list');

// function insertPhraseInDOM() {
//   const listadeFrase = JSON.parse(localStorage.getItem('phrases'));
//   const listLength = listadeFrase.length - 1;
//   const texto = listadeFrase[listLength];
//   const lifrase = document.createElement('li');
//   lifrase.innerText = texto;
//   list.appendChild(lifrase);
// }

// function addPhraseToLocalStorage() {
//   const oldList = JSON.parse(localStorage.getItem('phrases'));
//   const texto = input.value;
//   oldList.push(texto);
//   localStorage.setItem('phrases', JSON.stringify(oldList));
//   insertPhraseInDOM();
// }

// function initialRenderization() {
//   if (localStorage.getItem('phrases') === null) {
//     localStorage.setItem('phrases', JSON.stringify([]));
//   } else {
//     const listadeFrase = JSON.parse(localStorage.getItem('phrases'));
//     const listLength = listadeFrase.length - 1;
//     for (let index = 0; index <= listLength; index += 1) {
//       const listElement = document.createElement('li');
//       listElement.innerText = listadeFrase[index];
//       list.appendChild(listElement);
//     }
//   }
// }

// button.addEventListener('click', addPhraseToLocalStorage);

// window.onload = function() {
//   initialRenderization();
// };

const button = document.getElementById('add-button');
const input = document.getElementById('phrases-input');
const list = document.getElementById('phrases-list');

function insertPhraseInDOM() {
  const phrasesList = JSON.parse(sessionStorage.getItem('phrases'));
  const listLength = phrasesList.length - 1;
  const phraseText = phrasesList[listLength];
  const phrase = document.createElement('li');
  phrase.innerText = phraseText;
  list.appendChild(phrase);
}

function addPhraseToSessionStorage() {
  if (sessionStorage.getItem('phrases') === null) {
    sessionStorage.setItem('phrases', JSON.stringify([]));
  }
  const oldList = JSON.parse(sessionStorage.getItem('phrases'));
  const phraseText = input.value;
  oldList.push(phraseText);
  sessionStorage.setItem('phrases', JSON.stringify(oldList));
  insertPhraseInDOM();
}

button.addEventListener('click', addPhraseToSessionStorage);