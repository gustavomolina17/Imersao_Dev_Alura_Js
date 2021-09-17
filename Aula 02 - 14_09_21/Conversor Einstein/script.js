function ConverterPeso() {
  var pesoElemento = document.getElementById("peso");
  var peso = pesoElemento.value;
  var pesoEmGrama = parseFloat(peso);

  var pesoEmKg = pesoEmGrama / 1000;
  console.log(pesoEmKg);
  var elementoPesoConvertido = document.getElementById("pesoConvertido");
  var pesoConvertido = "O resultado é " + pesoEmKg + "Kg";
  elementoPesoConvertido.innerHTML = pesoConvertido;
}

function ConverterMoeda() {
  var valorElemento = document.getElementById("valor");
  var valor = valorElemento.value;
  var valorEmDolar = parseFloat(valor);

  var valorEmReais = valorEmDolar * 5.26;
  console.log(valorEmDolar);
  var elementoConvertido = document.getElementById("moedaConvertida");
  var moedaConvertida = "O resultado é R$ " + valorEmReais;
  elementoConvertido.innerHTML = moedaConvertida;
}

function ConverterDistancia() {
  var distanciaElemento = document.getElementById("distancia");
  var distancia = distanciaElemento.value;
  var distanciaEmKm = parseFloat(distancia);

  var distanciaEmM = distanciaEmKm * 1000;
  console.log(distanciaEmKm);
  var elementoDistanciaConvertida = document.getElementById(
    "distanciaConvertida"
  );
  var distanciaConvertida = "O resultado é " + distanciaEmM + "metros";
  elementoDistanciaConvertida.innerHTML = distanciaConvertida;
}
