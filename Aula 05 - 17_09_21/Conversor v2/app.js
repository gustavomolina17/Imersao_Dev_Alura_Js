function Converter() {
  let valor = parseFloat(document.getElementById("valor-de").value);
  let converterDe = document.getElementById("converter-de").value;
  let converterPara = document.getElementById("converter-para").value;
  let valorFinal;

  if (converterDe == "Dólar" && converterPara == "Dólar") {
    valorFinal = valor;
  } else if (converterDe == "Dólar" && converterPara == "Euro") {
    valorFinal = dolarEuro(valor);
  } else if (converterDe == "Dólar" && converterPara == "Real") {
    valorFinal = dolarReal(valor);
  } else if (converterDe == "Dólar" && converterPara == "Bitcoin") {
    valorFinal = dolarBitcoin(valor);
  }

  if (converterDe == "Euro" && converterPara == "Dólar") {
    valorFinal = euroDolar(valor);
  } else if (converterDe == "Euro" && converterPara == "Euro") {
    valorFinal = valor;
  } else if (converterDe == "Euro" && converterPara == "Real") {
    valorFinal = euroReal(valor);
  } else if (converterDe == "Euro" && converterPara == "Bitcoin") {
    valorFinal = euroBitcoin(valor);
  }

  if (converterDe == "Real" && converterPara == "Dólar") {
    valorFinal = realDolar(valor);
  } else if (converterDe == "Real" && converterPara == "Euro") {
    valorFinal = realEuro(valor);
  } else if (converterDe == "Real" && converterPara == "Real") {
    valorFinal = valor;
  } else if (converterDe == "Real" && converterPara == "Bitcoin") {
    valorFinal = realBitcoin(valor);
  }

  if (converterDe == "Bitcoin" && converterPara == "Dólar") {
    valorFinal = bitcoinDolar(valor);
  } else if (converterDe == "Bitcoin" && converterPara == "Euro") {
    valorFinal = bitcoinEuro(valor);
  } else if (converterDe == "Bitcoin" && converterPara == "Real") {
    valorFinal = bitcoinReal(valor);
  } else if (converterDe == "Bitcoin" && converterPara == "Bitcoin") {
    valorFinal = valor;
  }

  document.getElementById("valor-para").value = valorFinal;
}

// Conversão Dolar
function dolarEuro(dolar) {
  return (dolar * 0.85).toFixed(2);
}

function dolarReal(dolar) {
  return (dolar * 5.29).toFixed(2);
}

function dolarBitcoin(dolar) {
  return (dolar * 0.000021).toFixed(7);
}

// Coneversão Euro
function euroDolar(euro) {
  return (euro * 1.17).toFixed(2);
}

function euroReal(euro) {
  return (euro * 6.2).toFixed(2);
}

function euroBitcoin(euro) {
  return (euro * 0.000024).toFixed(7);
}

// Conversão Real
function realDolar(real) {
  return (real * 0.19).toFixed(2);
}

function realEuro(real) {
  return (real * 0.16).toFixed(2);
}

function realBitcoin(real) {
  return (real * 0.0000039).toFixed(7);
}

// Conversão Bitcoin
function bitcoinDolar(bitcoin) {
  return (bitcoin * 48095.1).toFixed(2);
}

function bitcoinEuro(bitcoin) {
  return (bitcoin * 40998.64).toFixed(2);
}

function bitcoinReal(bitcoin) {
  return (bitcoin * 254271.37).toFixed(2);
}
