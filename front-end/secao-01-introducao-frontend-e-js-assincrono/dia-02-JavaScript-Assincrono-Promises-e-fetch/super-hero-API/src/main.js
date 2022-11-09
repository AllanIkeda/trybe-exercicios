/**
 * API base
 * https://superheroapi.com/api/5712298775500973
 */

const imgCard = document.querySelector('#card');
const nameH = document.querySelector('#name-hero');
const btnSort = document.querySelector('#btn-sort');

const maxHero = 500;
const randomNumber = () => Math.floor(Math.random() * maxHero);
const urlBase = "https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api";
console.log(randomNumber());

btnSort.addEventListener('click', (event) => {
  event.preventDefault();

  const id = randomNumber();
  // console.log(id);
  fetch(`${urlBase}/id/${id}.json`)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      imgCard.src = data.images.md;
      nameH.innerHTML = data.name;
    })
});