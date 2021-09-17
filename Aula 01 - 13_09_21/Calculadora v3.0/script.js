function calcular() {
  var nota1 = parseFloat(document.getElementById("nota1").value);
  var nota2 = parseFloat(document.getElementById("nota2").value);
  var nota3 = parseFloat(document.getElementById("nota3").value);
  var nota4 = parseFloat(document.getElementById("nota4").value);

  var notaFinal = (nota1 + nota2 + nota3 + nota4) / 4;

  var notaFix = notaFinal.toFixed(1);

  if (notaFix >= 6) {
    document.getElementById("notaFinal").className = "aprovado";
    document.getElementById("notaFinal").innerHTML =
      "Parabéns, você foi aprovado!!!  Nota final: " + notaFix;
  } else {
    document.getElementById("notaFinal").className = "reprovado";
    document.getElementById("notaFinal").innerHTML =
      "Que pena, você foi reprovado!  Nota final: " + notaFix;
  }
}
