// pipoca = 10 segundos
// macarrão = 8 egundos
// carne = 15 segundos
// feijão = 12 segundos
// brigadeiro = 8 segundos


function pipoca(valor) {
  if(valor == 20) {
    return 'Que pena! Sua comida queimou!\n';
}
 else if(valor < 10) {
      return 'Tempo insuficiente\n';
}
else if(valor >= 30) {
    return 'Kabumm!\n';
}
else if(valor = 10) {
    return 'Prato pronto, tenha um bom apetite!!!\n';
}
}

console.log(pipoca(9));











