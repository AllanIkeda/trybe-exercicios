// exemplo 1
// const paragraph = document.getElementById("paragraph");
//       paragraph.style.color = "red";
// document.getElementById("page-title").innerText = 'Som do coração';
// document.getElementById("second-paragraph").innerText = 'Um dos melhores filmes'
// document.getElementById("subtitle").innerText = 'classificação:'

// exemplo 2
// const paragraph = document.getElementById("paragraph");
//       paragraph.style.color = "red";
// document.getElementsByClassName('paragrafo');

// exemplo3

let header = document.getElementById('header-container');
header.style.backgroundColor = 'rgb(104, 200, 100)';

let urgTasks = document.getElementsByClassName('emergency-tasks')[0];
urgTasks.style.backgroundColor = 'rgb(221, 128, 128)';

let noUrgTasks = document.getElementsByClassName('no-emergency-tasks')[0];
noUrgTasks.style.backgroundColor = 'rgb(134, 207, 120)';


let bordertasks = document.getElementsByTagName('h3');
for (let i = 0; i < bordertasks.length; i += 1) {
  bordertasks[i].style.border = '3px solid black';
  bordertasks[i].style.margin = '0px';
}

let bgTasksTitles = document.querySelectorAll('.emergency-tasks h3');
for (let h = 0; h < bgTasksTitles.length; h += 1) {
  bgTasksTitles[h].style.backgroundColor =  'rgb(221, 91, 91)';
 }

 let bgTasksTitles2 = document.querySelectorAll('.no-emergency-tasks h3');
 for (let h = 0; h < bgTasksTitles2.length; h += 1) {
  bgTasksTitles2[h].style.backgroundColor =  'rgb(134, 190, 90)';
 }

let footer = document.getElementById('footer-container');
footer.style.backgroundColor = 'rgb(104, 200, 100)';
footer.style.marginBottom = '0%';

// const header = document.getElementById('header-container');
// header.style.backgroundColor = 'rgb(0, 176, 105)';
