window.onload = function() {
  function trocaFundo() {
  let fundoBody = document.getElementById('corDeFundo');
  let caixaFundo = document.getElementById('caixa-cor-fundo');
  fundoBody.style.backgroundColor = caixaFundo.value;
  localStorage.setItem('fundo', fundoBody.style.backgroundColor);
  caixaFundo.value = '';
  }
  let butaoFundo = document.getElementById('btn-color-background');
  butaoFundo.addEventListener('click', trocaFundo);
  
  function trocaCorLetra() {
    let texto = document.getElementById('text');
    let caixaCorLetra = document.getElementById('caixa-cor-fonte')
    texto.style.color = caixaCorLetra.value;
    localStorage.setItem('corLetra', texto.style.color)
    caixaCorLetra.value = '';
  }
  let butaoCorLetra = document.getElementById('btn-color-font');
  butaoCorLetra.addEventListener('click', trocaCorLetra);
  function tamanhoFonte() {
    let texto = document.getElementById('text');
    let caixaTamanhoLetra = document.getElementById('caixa-fonte-size')
    texto.style.fontSize = caixaTamanhoLetra.value + 'px';
    localStorage.setItem('tamanhoLetra', texto.style.fontSize)
    caixaTamanhoLetra.value = '';
  }
  let butaoTamanhoLetra = document.getElementById('btn-font-size');
  butaoTamanhoLetra.addEventListener('click', tamanhoFonte);
  function espacamentoFonte() {
    let texto = document.getElementById('text');
    let caixaTamanhoEspaco = document.getElementById('caixa-line-size')
    texto.style.lineHeight = caixaTamanhoEspaco.value + 'px';
    localStorage.setItem('espacamento', texto.style.lineHeight);
    caixaTamanhoEspaco.value = '';
  }
  let butaoTamanhoEspacamento = document.getElementById('btn-line-size');
  butaoTamanhoEspacamento.addEventListener('click', espacamentoFonte);
  function tipoFonte() {
    let texto = document.getElementById('text');
    let caixaTipoTexto = document.getElementById('caixa-font-type');
    texto.style.fontFamily = caixaTipoTexto.value;
    localStorage.setItem('fonte', texto.style.fontFamily);
    caixaTipoTexto.value = '';
  }
  let butaoTipoFonte = document.getElementById('btn-font-type');
  butaoTipoFonte.addEventListener('click', tipoFonte);
  criaChavesFundo()
  criaChavesCorLetra()
  criaChavesTamanhoLetra()
  criaChavesEspacamento()
  criaChavesFonte()
}
function criaChavesFundo () {
  let chavesLocais = localStorage;
  if (chavesLocais.getItem('fundo') === null ) {
    let backgroundColor = document.getElementById('corDeFundo')
    chavesLocais.setItem('fundo', backgroundColor.style.backgroundColor);
  } else {
    let backgroundColor = document.getElementById('corDeFundo');
    backgroundColor.style.backgroundColor = localStorage.getItem('fundo');
  }
}
function criaChavesCorLetra () {
  let chavesLocais = localStorage;
  if (chavesLocais.getItem('corLetra') === null ) {
  let p = document.getElementById('text');
  chavesLocais.setItem('corLetra', p.style.color);
  } else {
    let corLetra = document.getElementById('text');
    corLetra.style.color = localStorage.getItem('corLetra');
  }
}
function criaChavesTamanhoLetra () {
  let chavesLocais = localStorage;
  if(chavesLocais.getItem('tamanhoLetra') === null) {
    let p = document.getElementById('text');
    chavesLocais.setItem('tamanhoLetra', p.style.fontSize);
  } else {
    let p = document.getElementById('text');
    p.style.fontSize = localStorage.getItem('tamanhoLetra');
  }
}
function criaChavesEspacamento () {
  let chavesLocais = localStorage;
  if (chavesLocais.getItem('espacamento') === null) {
    let p = document.getElementById('text');
    chavesLocais.setItem('espacamento', p.style.lineHeight);
  } else {
    let p = document.getElementById('text');
    p.style.lineHeight = localStorage.getItem('espacamento');
  }
}
function criaChavesFonte () {
  let chavesLocais = localStorage;
  if (chavesLocais.getItem('fonte') === null) {
    let p = document.getElementById('text');
    chavesLocais.setItem('fonte', p.style.fontFamily);
  } else {
    let p = document.getElementById('text');
    p.style.fontFamily = localStorage.getItem('fonte')
  }
}