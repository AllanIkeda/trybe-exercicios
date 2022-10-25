/**
  *! exemplos:
*/
// const wakeUp = () => `Acordando!!`;
// const breakfest = () => `Bora tomar café`;
// const sleep = () => `Partiu Dormir`

// const doingThings = (func) => {
//   const result = func();
//   console.log(result);
// };

// doingThings(wakeUp);
// doingThings(breakfest);
// doingThings(sleep);

/**
  *! exercicio 1:
*/
const dados = (fullname) => {
  const email = fullname.toLowerCase().split(' ').join('_');
  return {
    fullname: fullname,
    email: `${email}@trybe.com`,
  };
}
const newEmployees = (dados) => {
  const employees = {
    id1: dados('Pedro Guerra'), // Nome: Pedro Guerra -> Chame sua função passando o nome Pedro Guerra como parâmetro, substituindo as aspas
    id2: dados('Luiza Drumond'), // Nome: Luiza Drumond -> Chame sua função passando o nome Luiza Drumond como parâmetro, substituindo as aspas
    id3: dados('Carla Paiva'), // Nome: Carla Paiva -> Chame sua função passando o nome Carla Paiva como parâmetro, substituindo as aspas
  }
  return employees;
};

console.log(newEmployees(dados));
/**
  *! exercicio 2:
*/

const check = (mynumber, number) => mynumber === number;

const lotery = (mynumber, callback) => {
  const number = Math.floor((Math.random() * 5) + 1);
  // if (mynumber === number) {
  //   return `sorteado  ${number} parabéns`;
  // }
  // return `sorteado  ${number} Perdeu`;

  // };
  return callback(mynumber, number) ? `sorteado  ${number} parabéns` : `sorteado  ${number} Perdeu`;

};
  console.log(lotery(3, check));

  /**
    *! exercicio 3:
  */

  const RIGHT_ANSWERS = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
  const STUDENT_ANSWERS = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];
  const comparador = (arr1, arr2) => {
    if (arr1 === arr2) {
      return 1;
    }
    if (arr2 === 'N.A') {
      return 0;
    }
    return 0.5;
  };

  const notaFinal = (gabarito, respostas, func) => {
    let contador = 0;
    for (let index = 0; index < gabarito.length; index += 1) {
      const resp = func(gabarito[index], respostas[index]);//1
      contador += resp;
    }
    return `Resultado final: ${contador} pontos`;
  }

  console.log(notaFinal(RIGHT_ANSWERS, STUDENT_ANSWERS, comparador));



  /**
    *! exercicio 4:
  */

    const mage = {
      healthPoints: 130,
      intelligence: 45,
      mana: 125,
      damage: undefined,
    };

    const warrior = {
      healthPoints: 200,
      strength: 30,
      weaponDmg: 2,
      damage: undefined,
    };

    const dragon = {
      healthPoints: 350,
      strength: 50,
      damage: undefined,
    };

    const battleMembers = { mage, warrior, dragon };

    const dragonDMG = (personagem) => {
      const minDMG = 15;
      const maxDMG = Math.floor(Math.random() * personagem.strength);
      const returnDMG = maxDMG > minDMG ? maxDMG : minDMG;
      return returnDMG;
    };

    const warriorDMG = (personagem) => {
      const minDMG = personagem.strength;
      const maxDMG = personagem.strength * personagem.weaponDmg;
      const returnDMG = maxDMG > minDMG ? maxDMG : minDMG;
      return returnDMG;
    };

    const mageDMG = (personagem) => {
      const minDMG = personagem.intelligence;
      const maxDMG = personagem.intelligence *2;
      const manaMage = personagem.mana;
      const returnDMG = {
        manaGasta: 0,
        damage: 'Not enough mana...',
      };
      if (manaMage > 15) {
        const mageDMG = mageDMG < minDMG ? maxDMG : minDMG;
        returnDMG.manaGasta = 15;
        returnDMG.damage = mageDMG;
        return returnDMG;
      }

      return returnDMG;
    }

    // const mage = {
    //   healthPoints: 130,
    //   intelligence: 45,
    //   mana: 125,
    //   damage: undefined,
    // };