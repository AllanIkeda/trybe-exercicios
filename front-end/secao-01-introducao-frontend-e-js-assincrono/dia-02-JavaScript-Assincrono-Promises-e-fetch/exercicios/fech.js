const fetch = require('node-fetch');
// import fetch from "node-fetch";

fetch('https://dummyjson.com/products/27')
  .then((response) => response.json())
  .then((data) => console.log('GET sem headers', data))
  .catch((error) => error)


//   fetch("https://api.goprogram.ai/inspiration")
//  .then(response => response.json())
//  .then(data => console.log(`"${data.quote}" | ${data.author}`))
//  .catch((error) => error);