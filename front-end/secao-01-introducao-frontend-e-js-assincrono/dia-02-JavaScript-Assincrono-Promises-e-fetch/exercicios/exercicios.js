const fetch = require("node-fetch");
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
  // const ramdomPromise = () =>
  //   new Promise((resolve, reject) => {
  //     setTimeout(() => {
  //       const randomNumber = generateRandomNumber();
  //       if (randomNumber % 2 === 0) return resolve(randomNumber);
  //       return reject(new Error(`O número ${randomNumber} é inválido`))
  //     }, 1000)
  //   })
  //   ramdomPromise().then((response) => {
  //   console.log(`o núumero é ${response}`);
  // })
  // rejectedPromise().then((response) => {
  //   console.log(`o mero é ${response}`);
  // })
  // .catch((error) => {
    // console.log(`rejectedPromise ${error}`);
  // })
  // .finally(() => console.log('Fim da execução da promise.'));
/**
 * * várias Promises
  * * Promises.all
*/
/**
 * ! exemplo 1
 */
  // cria uma promise que será sempre resolvida
// const generateResolvedPromise = (timer) =>
// new Promise((resolve, reject) => {
//   setTimeout(() => {
//     const randomNumber = generateRandomNumber();
//     console.log(`Promise resolvida em ${timer / 1000} segundo(s)`);
//     resolve(
//       `O número ${randomNumber} foi gerado em ${timer / 1000} segundo(s)`
//     );
//   }, timer);
// });

// // cria uma promise que será sempre rejeitada
// const generateRejectedPromise = (timer) =>
// new Promise((resolve, reject) => {
//   setTimeout(() => {
//     const randomNumber = generateRandomNumber();
//     console.log(`Promise rejeitada em ${timer / 1000} segundo(s)`);
//     reject(
//       new Error(
//         `O número ${randomNumber} é inválido. Promise rejeitada em ${
//           timer / 1000
//         } segundo(s)`
//       )
//     );
//   }, timer);
// });

// Promise.all([
// generateResolvedPromise(1000),
// generateResolvedPromise(3000),
// generateResolvedPromise(2000),
// ])
// .then((result) => {
//   console.log(result);
// })
// .catch((error) => console.log(error.message));

/**
 * ! exemplo 2
 */
// cria uma promise que será sempre resolvida
// const generateResolvedPromise = (timer) =>
//   new Promise((resolve, reject) => {
//     setTimeout(() => {
//       const randomNumber = generateRandomNumber();
//       console.log(`Promise resolvida em ${timer / 1000} segundo(s)`);
//       resolve(
//         `O número ${randomNumber} foi gerado em ${timer / 1000} segundo(s)`
//       );
//     }, timer);
//   });

// // cria uma promise que será sempre rejeitada
// const generateRejectedPromise = (timer) =>
//   new Promise((resolve, reject) => {
//     setTimeout(() => {
//       const randomNumber = generateRandomNumber();
//       console.log(`Promise rejeitada em ${timer / 1000} segundo(s)`);
//       reject(
//         new Error(
//           `O número ${randomNumber} é inválido. Promise rejeitada em ${
//             timer / 1000
//           } segundo(s)`
//         )
//       );
//     }, timer);
//   });

// Promise.all([
//   generateResolvedPromise(1000),
//   generateResolvedPromise(3000),
//   generateRejectedPromise(2000),
// ])
//   .then((result) => {
//     console.log(result);
//   })
//   .catch((error) => console.log(error.message));
/**
 * * várias Promises
  * * Promises.race
*/
/**
 * ! exemplo 1
 */
//  const generateResolvedPromise = (timer) =>
//  new Promise((resolve, reject) => {
//    setTimeout(() => {
//      const randomNumber = generateRandomNumber();
//      console.log(`Promise resolvida em ${timer / 1000} segundo(s)`);
//      resolve(
//        `O número ${randomNumber} foi gerado em ${timer / 1000} segundo(s)`
//      );
//    }, timer);
//  });

// // cria uma promise que será sempre rejeitada
// const generateRejectedPromise = (timer) =>
//  new Promise((resolve, reject) => {
//    setTimeout(() => {
//      const randomNumber = generateRandomNumber();
//      console.log(`Promise rejeitada em ${timer / 1000} segundo(s)`);
//      reject(
//        new Error(
//          `O número ${randomNumber} é inválido. Promise rejeitada em ${
//            timer / 1000
//          } segundo(s)`
//        )
//      );
//    }, timer);
//  });

// Promise.race([
//  generateResolvedPromise(3000),
//  generateResolvedPromise(1000),
//  generateResolvedPromise(2000),
// ])
//  .then((result) => {
//    console.log(result);
//  })
//  .catch((error) => console.log(error.message));

 /**
 * * várias Promises
  * * Promises.any
*/
/**
 * ! exemplo 1
 */
//  const generateResolvedPromise = (timer) =>
//  new Promise((resolve, reject) => {
//    setTimeout(() => {
//      const randomNumber = generateRandomNumber();
//      console.log(`Promise resolvida em ${timer / 1000} segundo(s)`);
//      resolve(
//        `O número ${randomNumber} foi gerado em ${timer / 1000} segundo(s)`
//      );
//    }, timer);
//  });

// // cria uma promise que será sempre rejeitada
// const generateRejectedPromise = (timer) =>
//  new Promise((resolve, reject) => {
//    setTimeout(() => {
//      const randomNumber = generateRandomNumber();
//      console.log(`Promise rejeitada em ${timer / 1000} segundo(s)`);
//      reject(
//        new Error(
//          `O número ${randomNumber} é inválido. Promise rejeitada em ${
//            timer / 1000
//          } segundo(s)`
//        )
//      );
//    }, timer);
//  });

// Promise.any([
//  generateResolvedPromise(3000),
//  generateRejectedPromise(1000),
//  generateResolvedPromise(2000),
// ])
//  .then((result) => {
//    console.log(result);
//  })
//  .catch((error) => console.log(error.message));
/**
 * ! exemplo 2
 */
//  const generateResolvedPromise = (timer) =>
//  new Promise((resolve, reject) => {
//    setTimeout(() => {
//      const randomNumber = generateRandomNumber();
//      console.log(`Promise resolvida em ${timer / 1000} segundo(s)`);
//      resolve(
//        `O número ${randomNumber} foi gerado em ${timer / 1000} segundo(s)`
//      );
//    }, timer);
//  });

// // cria uma promise que será sempre rejeitada
// const generateRejectedPromise = (timer) =>
//  new Promise((resolve, reject) => {
//    setTimeout(() => {
//      const randomNumber = generateRandomNumber();
//      console.log(`Promise rejeitada em ${timer / 1000} segundo(s)`);
//      reject(
//        new Error(
//          `O número ${randomNumber} é inválido. Promise rejeitada em ${
//            timer / 1000
//          } segundo(s)`
//        )
//      );
//    }, timer);
//  });

// Promise.any([
//  generateRejectedPromise(3000),
//  generateRejectedPromise(1000),
//  generateRejectedPromise(2000),
// ])
//  .then((result) => {
//    console.log(result);
//  })
//  .catch((error) => console.log(error.errors));
 /**
 * * várias Promises
  * * Promises.allSettled
*/
/**
 * ! exemplo 1
 */
//  const generateResolvedPromise = (timer) =>
//  new Promise((resolve, reject) => {
//    setTimeout(() => {
//      const randomNumber = generateRandomNumber();
//      console.log(`Promise resolvida em ${timer / 1000} segundo(s)`);
//      resolve(
//        `O número ${randomNumber} foi gerado em ${timer / 1000} segundo(s)`
//      );
//    }, timer);
//  });

// // cria uma promise que será sempre rejeitada
// const generateRejectedPromise = (timer) =>
//  new Promise((resolve, reject) => {
//    setTimeout(() => {
//      const randomNumber = generateRandomNumber();
//      console.log(`Promise rejeitada em ${timer / 1000} segundo(s)`);
//      reject(
//        new Error(
//          `O número ${randomNumber} é inválido. Promise rejeitada em ${
//            timer / 1000
//          } segundo(s)`
//        )
//      );
//    }, timer);
//  });

// Promise.allSettled([
//  generateResolvedPromise(3000),
//  generateRejectedPromise(2000),
//  generateResolvedPromise(1000),
// ])
//  .then((result) => {
//    console.log(result);
//  })
//  .catch((error) => console.log(error.errors));
 /**
 * * fetch()
*/
/**
 * ! exemplo 1
 */
fetch("https://api.goprogram.ai/inspiration")
 .then(response => response.json())
 .then(data => console.log(`"${data.quote}" | ${data.author}`));