let valorSecreto = parseInt(Math.random() * 11);
tentativas = 3;

console.log(valorSecreto);

function chute() {
  let valorChute = parseInt(document.getElementById("valor").value);

  if (valorChute == valorSecreto) {
    document.getElementById("resultadoTela").innerHTML = "ACERTOU!!!";
    tentativas = 0;
  } else if (tentativas > 1 && valorChute != valorSecreto) {
    tentativas--;
    document.getElementById("resultadoTela").innerHTML =
      "ERROU ;-; Você tem </br></br>" + tentativas + " Tentativas";
  } else {
    document.getElementById("resultadoTela").innerHTML =
      "Acabaram as tentativas </br></br> O número secreto era " + valorSecreto;
    tentativas = -999;
  }
}
