window.onload = function() {

  let paragrafo = document.getElementById('paragrafo');

  function bcgColor(){
    let changeBg = document.getElementById('bgColor');
    paragrafo.style.backgroundColor = changeBg.value;

  }
  let bgbotao = document.getElementById('change-bg');
  bgbotao.addEventListener('click', bcgColor);

  function fontColor() {
  let changeColorFont = document.getElementById('fontColor');
    paragrafo.style.color = changeColorFont.value;

  }
  let colorFontbtn = document.getElementById('fontColor-btn');
  colorFontbtn.addEventListener('click', fontColor);
}
