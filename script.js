let numeroSecreto = parseInt(Math.random() * 100);
let tentativas = 1;

alert('Boas vindas ao jogo do Número Secreto!');

let chute = Number(
  prompt('Diga um número de 1-100: (tentativas: ' + tentativas + ')')
);
console.log(chute + ' Foi o número escolhido.');

while (chute !== numeroSecreto) {
  if (chute < numeroSecreto) {
    alert('O número secreto é maior que: ' + chute);
    console.log(chute + ' É menor que ' + numeroSecreto);
  } else {
    alert('O número secreto é menor que: ' + chute);
    console.log(chute + ' É maior que ' + numeroSecreto);
  }

  chute = Number(
    prompt('Diga um número de 1-100: (tentativas: ' + tentativas + ')')
  );
  console.log('O usuário irá escolher novamente...');

  tentativas++;
}

let resultadoTentativas = tentativas > 1 ? 'Tentativas' : 'Tentativa';

alert(
  `Parabéns, você acertou o número secreto com: ${tentativas} ${resultadoTentativas}!`
);
console.log('Ele acertou!');
