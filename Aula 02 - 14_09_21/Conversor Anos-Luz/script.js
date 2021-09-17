function Converter() {
  var valorElemento = document.getElementById("valor");
  var valor = valorElemento.value;
  var valorAnoLuz = parseFloat(valor);

  var valorKm = (valorAnoLuz * 9460536068016).toLocaleString("pt-BR");

  var elementoValorConvertido = document.getElementById("valorConvertido");
  var valorConvertido = "A distância é de " + valorKm + " km";
  elementoValorConvertido.innerHTML = valorConvertido;

  console.log(valorConvertido);
}
