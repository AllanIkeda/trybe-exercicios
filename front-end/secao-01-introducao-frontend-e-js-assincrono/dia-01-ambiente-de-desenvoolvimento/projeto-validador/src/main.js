import validator from 'validator';
import './style.css';

const campoDeTexto = document.querySelector('#value');
const botao = document.querySelector('#button');
const seletor = document.querySelector('#option');
const textoDeSaida = document.querySelector('#answer');
const UUID_VERSION = 4;

botao.addEventListener('click', (e) => {
  e.preventDefault();
  const campos = {
    cpf: validator.isTaxID(campoDeTexto.value, 'pt-BR'),
    hexColor: validator.isHexColor(campoDeTexto.value),
    email: validator.isEmail(campoDeTexto.value),
    uuid: validator.isUUID(campoDeTexto.value, UUID_VERSION),
    url: validator.isURL(campoDeTexto.value),
  };
  textoDeSaida.innerHTML = `A validação retornou ${campos[seletor.value]}`;
});
