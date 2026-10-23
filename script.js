let numeroSecreto = 29;

alert('Boas vindas ao jogo do Número Secreto!');

let chute = Number(prompt('Diga um número de 1-100:'));
console.log(chute + ' Foi o número escolhido.');

while (chute !== numeroSecreto) {
  if (chute < numeroSecreto) {
    alert('O número secreto é maior que: ' + chute);
    console.log(chute + ' É menor que ' + numeroSecreto);
  } else {
    alert('O número secreto é menor que: ' + chute);
    console.log(chute + ' É maior que ' + numeroSecreto);
  }

  chute = Number(prompt('Diga um número de 1-100:'));
  console.log('O usuário irá escolher novamente...');
}

alert('Parabéns, você acertou o número secreto!');
console.log('Ele acertou!');
