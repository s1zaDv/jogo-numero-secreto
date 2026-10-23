let = numeroSecreto = 29;
alert('Boas vindas ao jogo do Número Secreto!');
let chute = prompt('Diga um número de 1-100:');

while (chute !== numeroSecreto) {
  if (chute < numeroSecreto) {
    alert('O número secreto é maior que: ' + chute);
  } else {
    alert('O número secreto é menor que: ' + chute);
  }

  chute = Number(prompt('Diga um número de 1-100:'));
}
alert('Parabéns, você acertou o número secreto!');
