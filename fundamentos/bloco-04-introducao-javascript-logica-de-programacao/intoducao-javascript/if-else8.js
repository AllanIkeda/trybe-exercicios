
let INSS;
let IR;

const Bruto = 3000.00;

if (Bruto <= 1556.94) {
  INSS = Bruto * 0.08;
} else if (Bruto <= 2594.92) {
  INSS = Bruto * 0.09;
} else if (Bruto <= 5189.82) {
  INSS = Bruto * 0.11;
} else {
  INSS = 570.88;
}

const liquido = Bruto - INSS;

if (liquido <= 1903.98) {
  IR = 0;
} else if (liquido <= 2826.65) {
  IR = (liquido * 0.075) - 142.80;
} else if (liquido <= 3751.05) {
  IR = (liquido * 0.15) - 354.80;
} else if (liquido <= 4664.68) {
  IR = (liquido * 0.225) - 636.13;
} else {
  IR = (liquido * 0.275) - 869.36;
};

console.log("Salário: " + (liquido - IR));
