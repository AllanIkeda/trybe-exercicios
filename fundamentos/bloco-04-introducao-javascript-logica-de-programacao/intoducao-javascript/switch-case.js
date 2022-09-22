const pecaDeXadrez = "Peão";

switch (pecaDeXadrez.toLowerCase()) {
  case "bispo":
    console.log(pecaDeXadrez + " anda na Diagonal");
    break;

  case "rainha":
    console.log(pecaDeXadrez + " anda naDiagonal, horizontal e vertical.");
    break;

  case "cavalo":
    console.log(pecaDeXadrez + ' anda em "L" pode pular sobre as peças.');
    break;

  case "torre":
    console.log(pecaDeXadrez + " anda na Horizontal e vertical.");
    break;

  case "peão":
    console.log(
      pecaDeXadrez +
        " anda Apenas uma casa para frente, ou duas casas caso seja a primeira vez que o mexe."
    );
    break;

  case "rei":
    console.log(pecaDeXadrez + "anda em qualquer direção, porém apenas 1 casa");
    break;
  default:
    console.log("Erro, peça inválida!");
}
