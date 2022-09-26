// ex1, ex2, ex3, ex4

let info = {
  personagem: 'Margarida',
  origem: 'Pato Donald',
  nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
};

info.recorrente = 'sim'
// console.log('Bem-vinda, '+ info.personagem);
// console.log(info['recorrente']);

for (let key in info) {
  console.log(info[key]);
}