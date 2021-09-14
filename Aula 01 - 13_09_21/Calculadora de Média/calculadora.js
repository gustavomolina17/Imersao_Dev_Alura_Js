// Declaração da variável nome
let nome = "Gustavo Molina";

// Declaração das 4 notas para cálculo da média

let nota1 = 9;
let nota2 = 7;
let nota3 = 4;
let nota4 = 2;

// Cálculo da média final
let notafinal = (nota1 + nota2 + nota3 + nota4) / 4;

// Números decimais com apenas 1 casa
let notafixada = notafinal.toFixed(1);

console.log("Seja bem vindo " + nome + ", sua média final é: " + notafixada);
