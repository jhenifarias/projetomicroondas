// Atividade de Checkpoint I - Jheniffer Farias, turma 9 CTD


// Pipoca 10 segundos

function pipoca(valor) {
    if(valor == 20) {
      return 'Que pena! Sua pipoca queimou :(\n';
  }
   else if(valor < 10) {
      return 'Tempo insuficiente, a pipoca ainda não está pronta.\n';
  }
  else if(valor >= 30) {
      return 'Kabumm, foi pipoca pra todo lado!\n';
  }
  else if(valor == 10) {
      return 'Oba, pipoca pronta, tenha um bom apetite!!! Aproveita um filme para acompanhar :)\n';
  }
  }
  
  // Macarrão 8 segundos
  
  function macarrao(valor) {
      if(valor == 16) {
        return 'Que pena! Seu macarrão queimou :(\n';
    }
     else if(valor < 8) {
          return 'Tempo insuficiente, o macarrão está cru\n';
    }
    else if(valor >= 24) {
        return 'Kabumm, foi macarrão pra todo lado!\n';
    }
    else if(valor = 8) {
        return 'Macarrão pronto, tenha um bom apetite!!!\n';
    }
    }
  
  // Carne 15 segundos
  
    function carne(valor) {
      if(valor == 30) {
        return 'Que pena! Sua carne queimou :(\n';
    }
     else if(valor < 15) {
          return 'Tempo insuficiente, a carne está crua.\n';
    }
    else if(valor >= 45) {
        return 'Kabumm, foi carne pra todo lado!\n';
    }
    else if(valor = 15) {
        return 'Carne pronta, tenha um bom apetite!!!\n';
    }
    }
  
  
  // Feijão 12 segundos
  
  
    function feijao(valor) {
      if (valor < 12) {
          return 'Tempo insuficiente, o feijão ainda não está pronto.\n';
    }
    else if(valor == 12) {
      return 'Feijão pronto, tenha um ótimo apetite!!!\n';
    }
  
    else if(valor <= 35) {
      return 'Que pena! Seu feijão queimou :(\n';
    }
    else if(valor >= 36) {
      return 'Kabumm, foi feijão pra todo lado!\n';
  
    }
    }
  
  
  // Brigadeiro 8 segundos.
  
  
    function brigadeiro(valor) {
      if(valor == 16) {
        return 'Que pena! Seu brigadeiro queimou :(\n';
    }
     else if(valor < 8) {
          return 'Tempo insuficiente, o brigadeiro ainda não está pronto\n';
    }
    else if(valor >= 24) {
        return 'Kabumm, lá se foi o brigadeiro!\n';
    }
    else if(valor = 8) {
        return 'Que delícia, brigadeiro pronto, tenha um bom apetite!!!\n';
    }
    }
  
    console.log(pipoca(9));
    console.log(pipoca(10));
    console.log(pipoca(20));
    console.log(pipoca(30));
  
    console.log('-----------------------------------------')
  
    console.log(macarrao(8));
    console.log(macarrao(16));
  
    console.log('-----------------------------------------')
  
    console.log(carne(10));
    console.log(carne(15));
    console.log(carne(30));
    console.log(carne(45));
  
    console.log('-----------------------------------------')
  
  
    console.log(feijao(11));
    console.log(feijao(12));
    console.log(feijao(22));
    console.log(feijao(36));
  
  
  console.log('-----------------------------------------')
  
  
    console.log(brigadeiro(5));
    console.log(brigadeiro(8));
    console.log(brigadeiro(16));
    console.log(brigadeiro(32));
  
  
  
   
  