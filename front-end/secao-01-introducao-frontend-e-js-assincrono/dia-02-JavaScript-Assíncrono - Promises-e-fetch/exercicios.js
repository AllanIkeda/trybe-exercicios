/**
 * *javascript Assicrono
 */
/**
 * ! exemplo 1
//  */
// console.log("Log 1");

// setTimeout(() => console.log("Async log"), 1000);

// console.log("Log 2");
// console.log("Log 3");
/**
 * * Promises
 */
/**
 * ! exemplo 1
 */
// função que gera um número aleatório
const generateRandomNumber = () => Math.round(Math.random() * 10);

// promise resolvida retornando o número aleatório
// const resolvedPromise = () =>
//   new Promise((resolve, reject) => {
//     setTimeout(() => {
//       const randomNumber = generateRandomNumber();
//       resolve(randomNumber);
//     }, 1000);
//   });

// // promise rejeitada retornando um objeto de erro
//   const rejectedPromise = () =>
//   new Promise((resolve, reject) => {
//     setTimeout(() => {
//       const randomNumber = generateRandomNumber();
//       reject(new Error(`O número ${randomNumber} é inválido.`));
//     }, 1000);
//   });
  const ramdomPromise = () =>
    new Promise((resolve, reject) => {
      setTimeout(() => {
        const randomNumber = generateRandomNumber();
        if (randomNumber % 2 === 0) return resolve(randomNumber);
        return reject(new Error(`O número ${randomNumber} é inválido`))
      }, 1000)
    })
    ramdomPromise().then((response) => {
    console.log(`o núumero é ${response}`);
  })
  // rejectedPromise().then((response) => {
  //   console.log(`o mero é ${response}`);
  // })
  .catch((error) => {
    console.log(`rejectedPromise ${error}`);
  })