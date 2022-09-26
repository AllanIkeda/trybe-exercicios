// ex1, ex2, ex3, ex4

let info = {
  personagem: 'Margarida',
  origem: 'Pato Donald',
  nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
};

info.recorrente = 'sim'
// console.log('Bem-vinda, '+ info.personagem);
// console.log(info['recorrente']);

// for (let key in info) {
//   console.log(info[key]);
// }

let info2 = {
  personagem: 'Tio Patinhas',
  origem: 'Christmas on Bear Mountain, Dell’s Four Color Comics #178’',
  nota: 'O último MacPatinhas',
  recorrente: 'sim'
}

for (let key in info && info2) {
  if (info[key] != info2[key]) {
    console.log(info[key] + ' e ' + info2[key]);
  }
  if (info[key] === info2[key]) {
    console.log('Ambos recorrente')
  }
}
