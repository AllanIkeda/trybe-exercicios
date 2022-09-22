const custo = 200;
const valor = 303;

if (custo >= 0 && valor >= 0) {
  const imposto = custo * 0.2
  const custoTotal = custo + imposto
  const lucro = valor - custoTotal
  const lucroTotal = lucro * 1000
  console.log(lucroTotal);
} else {
  console.log('Erro! os valores não podem ser menor que 0');
}
