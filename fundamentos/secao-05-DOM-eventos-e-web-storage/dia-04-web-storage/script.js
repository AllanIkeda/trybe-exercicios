window.onload = function () {
  let paragrafo = document.getElementById("paragrafo");
  let txt = document.getElementById("txt");

  function bcgColor() {
    let changeBg = document.getElementById("bgColor");
    paragrafo.style.backgroundColor = changeBg.value;
    localStorage.setItem("fundo", paragrafo.style.backgroundColor);
    changeBg.value = "";
  }
  let bgbotao = document.getElementById("change-bg");
  bgbotao.addEventListener("click", bcgColor);

  function fontColor() {
    let changeColorFont = document.getElementById("fontColor");
    txt.style.color = changeColorFont.value;
    localStorage.setItem("fontColor", txt.style.color);
    changeColorFont = "";
  }
  let colorFontbtn = document.getElementById("fontColor-btn");
  colorFontbtn.addEventListener("click", fontColor);

  function fontSize() {
    let changeFont = document.getElementById("tamFont");
    txt.style.fontSize = changeFont.value + "px";
    localStorage.setItem("tamFont", txt.style.fontSize);
    changeFont = "";
  }
  let btnTamFont = document.getElementById("tamFont-btn");
  btnTamFont.addEventListener("click", fontSize);

  function lineHeight() {
    let changeLineHeight = document.getElementById("espFont");
    txt.style.lineHeight = changeLineHeight.value + "px";
    localStorage.setItem("espFont", txt.style.lineHeight);
    changeLineHeight = "";
  }
  let espacoLetras = document.getElementById("espacoLetras");
  espacoLetras.addEventListener("click", lineHeight);

  function fontFamily() {
    let fontInput = document.getElementById("fontFamilyInput");
    txt.style.fontFamily = fontInput.value;
    localStorage.setItem("fontFamily", txt.style.fontFamily);
    fontInput = "";
  }
  let fonte = document.getElementById("change-FF");
  fonte.addEventListener("click", fontFamily);

  guardaFundo();
  guardaCorFont();
  guardatTmFont();
  guardatespFont();
  guardafontFamily();
};

function guardaFundo() {
  let fundo = document.getElementById("paragrafo");
  if (localStorage.getItem("fundo") === null) {
    localStorage.setItem("fundo", fundo.style.backgroundColor);
  } else {
    fundo.style.backgroundColor = localStorage.getItem("fundo");
  }
}

function guardaCorFont() {
  if (localStorage.getItem("fontColor") === null) {
    localStorage.setItem("fontColor", txt.style.color);
  } else {
    txt.style.color = localStorage.getItem("fontColor");
  }
}

function guardatTmFont() {
  if (localStorage.getItem("tamFont") === null) {
    localStorage.setItem("tamFont", txt.style.fontSize);
  } else {
    txt.style.fontSize = localStorage.getItem("tamFont");
  }
}

function guardatespFont() {
  if (localStorage.getItem("espFont") === null) {
    localStorage.setItem("espFont", txt.style.lineHeight);
  } else {
    txt.style.lineHeight = localStorage.getItem("espFont");
  }
}

function guardafontFamily() {
  if (localStorage.getItem("fontFamily") === null) {
    localStorage.setItem("fontFamily", txt.style.fontFamily);
  } else {
    txt.style.fontFamily = localStorage.getItem("fontFamily");
  }
}
function deletePref() {
  alert("Deletando as preferencias");
  let btnExclui = document.getElementById("preferencias");
  let local = localStorage;
  console.log(localStorage.clear());
  window.location = window.location.href;
}
let btnExclui = document.getElementById("preferencias");

btnExclui.addEventListener("click", deletePref);
