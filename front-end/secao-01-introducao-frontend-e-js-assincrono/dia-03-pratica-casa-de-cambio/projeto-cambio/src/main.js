import './style.css';
import Swal from 'sweetalert2';
const moeda = document.querySelector('#moeda');
const pesquisar = document.querySelector('#btn');
const resultDiv = document.querySelector('#result');
const tituloMoney = document.querySelector('.tituloMoney');
const resultContainer = document.querySelector('.resultContainer');
const main = document.querySelector('#main');


const creath2 = (base) => {
  tituloMoney.innerHTML = `Valores referentes a 1 ${base}`
}
const createSpan = (rates) => {
  const arr = Object.keys(rates);
  arr.forEach((element) => {
    const span = document.createElement('span');
    const coin = document.createElement('div');
    const amount = document.createElement('div');
    amount.style.color = '#FFE713';
    // amount.style.
    coin.className = 'bi bi-coin';
    span.appendChild(coin);
    span.appendChild(amount);
    span.className = 'resultText';
    coin.innerHTML = `  ${element}`;
    amount.innerHTML = ` ${rates[element].toFixed(2)} `
    resultDiv.appendChild(span);
  });
};

const clearSpans = () => {
  const spans = document.querySelectorAll('.resultText');
  spans.forEach((span) => {
    span.remove();
  });
};

const errorMessages = (error) => {
  Swal.fire({
    icon: 'error',
    title: error,
    text: 'Digite uma moeda!'
  });
};

pesquisar.addEventListener('click', () => {
  const moedaValue = moeda.value.toUpperCase();
  const url = `https://api.exchangerate.host/latest?base=${moedaValue}`;
  if (moedaValue === '') {
    errorMessages('Campo vazio!');
  } else {
    fetch(url)
      .then((response) => response.json())
      .then(({ base, rates }) => {
        clearSpans();
        if (base !== moedaValue) {
          errorMessages('Moeda não encontrada!');
        } else {
          resultContainer.style.display = 'block';
          main.style.justifyContent = 'space-around';
          createSpan(rates, base);
          creath2(base);
        }
      });
  }
});
