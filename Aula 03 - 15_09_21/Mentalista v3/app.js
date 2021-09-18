let numeroSecreto = parseInt(Math.random() * 11);
let tentativasRestantes = 3;

function Chutar() {
  let elementoResultado = document.getElementById("resultado");
  let chute = parseInt(document.getElementById("valor").value);
  console.log(chute);

  if (chute == numeroSecreto) {
    elementoResultado.innerHTML = "Parabéns! Você acertou";
  } else if (chute > 10 || chute < 0) {
    elementoResultado.innerHTML =
      "OPS! Você deve digitar um numero entre 0 a 10!";
  } else {
    tentativasRestantes--;
    if (chute > numeroSecreto) {
      elementoResultado.innerHTML =
        "Você errou, o número é menor do que " +
        chute +
        ", você ainda tem " +
        tentativasRestantes +
        " tentativa(s).";
    } else {
      elementoResultado.innerHTML =
        "Você errou, o número é maior do que " +
        chute +
        ", você ainda tem " +
        tentativasRestantes +
        " tentativa(s).";
    }
  }
  if (tentativasRestantes <= 0) {
    elementoResultado.innerHTML =
      "OPS! Não foi dessa vez! O número secreto era " + numeroSecreto;
  }
}
function Resetar() {
  elementoResultado = document.getElementById("resultado");
  elementoResultado.innerHTML = "";
  numeroSecreto = parseInt(Math.random() * 11);
  tentativasRestantes = 3;
  document.getElementById("valor").value = "";
}
