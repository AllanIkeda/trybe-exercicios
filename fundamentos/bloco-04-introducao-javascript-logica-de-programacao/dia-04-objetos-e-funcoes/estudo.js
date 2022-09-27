let info = {
  personagem: 'Margarida',
  origem: 'Pato Donald',
  nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
};

info.recorrente = 'sim'

let info2 = {
  personagem: 'Tio Patinhas',
  origem: 'Christmas on Bear Mountain, Dell’s Four Color Comics #178’',
  nota: 'O último MacPatinhas',
  recorrente: 'sim'
}

for (let key in info, info2) {
    if (info[key] !== info2[key]) {
      console.log(info[key] + ' e ' + info2[key]);
    }else{
      console.log('Ambos recorrente')
    }
  }
