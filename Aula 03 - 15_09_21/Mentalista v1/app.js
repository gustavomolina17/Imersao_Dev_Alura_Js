let numeroSecreto = parseInt(Math.random() * 11);
let resultOnScreen = document.getElementById("resultado");
console.log(numeroSecreto);
let attempts = 3;
function Chutar() {
  let chute = parseInt(document.getElementById("valor").value);

  if (chute == numeroSecreto) {
    resultOnScreen.innerHTML = "Parabéns, você acertou!";
  } else if (chute > 10 || chute < 0) {
    resultOnScreen.innerHTML =
      "Tente digitar um número entre 0 e 10, você ainda possui " +
      attempts +
      " tentativas!";
  } else if (numeroSecreto > chute) {
    attempts = attempts - 1;
    resultOnScreen.innerHTML =
      "Tente um valor mais alto, você ainda possui " +
      attempts +
      " tentativas!";
  } else if (numeroSecreto < chute) {
    attempts = attempts - 1;
    resultOnScreen.innerHTML =
      "Tente um valor um pouco menor, você ainda possui " +
      attempts +
      " tentativas!";
  }
  if (attempts == 0)
    resultOnScreen.innerHTML =
      "Infelizmente acabaram suas três tentativas, o número secreto era " +
      numeroSecreto +
      ". Você pode tentar outra vez.";
}
