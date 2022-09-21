let status = 'sad';

switch (status) {
  case'aprovada':
    console.log('Parabéns, você foi aprovada(o)') ;
    break;

  case'lista':
    console.log('Você está na nossa lista de espera');
    break;

  case'reprovada':
  console.log('Você foi reprovada');
  break;

  default:
    console.log('informação incorreta');
}