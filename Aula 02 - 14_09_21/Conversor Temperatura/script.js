function Converter() {
  var valorElemento = document.getElementById("valor");
  var valor = valorElemento.value;
  var valorCelsius = parseFloat(valor);
  var valorKelvin = valorCelsius + 273.15;
  var valorFahrenheit = (valorCelsius * 9) / 5 + 32;

  var convertidoVisto = document.getElementById("valorConvertidoKelvin");
  var convertidoVisto2 = document.getElementById("valorConvertidoFarhrenheit");
  var convertidoTexto = valorKelvin.toFixed(2) + " K";
  var convertidoTexto2 = valorFahrenheit.toFixed(2) + " F";

  convertidoVisto.innerHTML = convertidoTexto;
  convertidoVisto2.innerHTML = convertidoTexto2;
}
