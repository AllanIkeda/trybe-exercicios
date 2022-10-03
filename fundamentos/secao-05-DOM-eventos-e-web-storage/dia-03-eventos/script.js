function createDaysOfTheWeek() {
  const weekDays = [
    "Domingo",
    "Segunda",
    "Terça",
    "Quarta",
    "Quinta",
    "Sexta",
    "Sábado",
  ];
  const weekDaysList = document.querySelector(".week-days");

  for (let index = 0; index < weekDays.length; index += 1) {
    const days = weekDays[index];
    const dayListItem = document.createElement("li");
    dayListItem.innerHTML = days;

    weekDaysList.appendChild(dayListItem);
  }
}

createDaysOfTheWeek();

// Escreva seu código abaixo.
const decemberDaysList = [
  29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
  21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31,
];

const mes = document.getElementById("days");
function criandoDay() {
  for (let d = 0; d < decemberDaysList.length; d += 1) {
    let lis = document.createElement("li");
    const days = decemberDaysList[d];
    if (days === 24 || days === 31) {
      lis.className = "day holiday";
    } else if (days === 4 || days === 11 || days === 18) {
      lis.className = "friday";
    } else if (days === 25){
      lis.className = "day holiday friday";
    } else{
      lis.className = "day";
    }
    lis.innerText = days;
    mes.appendChild(lis);
  }
}

function criandoBtn (string, id){
  let btnDiv = document.querySelector('.buttons-container');
  btnHoliday = document.createElement('button');
  btnHoliday.innerText = string;
  btnDiv.appendChild(btnHoliday);
  btnHoliday.id = id;

}

function bgColor () {
  let feriado = document.querySelectorAll('.holiday');
  let btn = document.querySelector('#btn-holiday');
  let altBG = 'white';
  let Bg = 'rgb(238,238,238)';

  btn.addEventListener('click', function () {
    for (let i = 0; i < feriado.length; i += 1) {
      if (feriado[i].style.backgroundColor === altBG) {
      feriado[i].style.backgroundColor = Bg;
      } else {
        feriado[i].style.backgroundColor = altBG;
      }

    }
  });
}

function modiTxt (){
  let btn = document.querySelector('#btn-friday');
  let sexta = document.getElementsByClassName('friday');//ARRAY
  let txt = 'SEXXXTOU'
  // console.log(sextaDias);
  // for (let i = 0; i < sexta.length; i += 1){
    // }
    btn.addEventListener('click', function(){
      for (let i = 0; i < sexta.length; i += 1){
      let sextaDias = [4, 11, 18, 25];
      if (sexta[i].innerText !== txt){
        sexta[i].innerText = txt;
      } else {
        sexta[i].innerHTML = sextaDias[i];
      }
    }
  });
}


criandoBtn('Feriados', 'btn-holiday');
criandoBtn('Sextouuu', 'btn-friday');
criandoDay();
bgColor();
// let sextaDiass = [4, 11, 18, 25];
modiTxt();

