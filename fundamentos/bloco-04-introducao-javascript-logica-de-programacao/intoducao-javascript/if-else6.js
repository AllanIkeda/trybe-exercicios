const num1 = 01;
const num2 = 37;
const num3 = 27;

let par = false;
let impar = false;

if (num1 % 2 == 0 || num2 % 2 == 0|| num3 % 2 == 0) {
  par = true;
  console.log(par);
}

if (num1 % 2 == 1 || num2 % 2 == 1 || num3 % 2 == 1) {
  impar = true;
  console.log(impar);
}