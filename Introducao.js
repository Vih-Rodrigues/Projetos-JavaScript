// Introdução ao JS


// Tipos de variáveis
const varConstante = 3;


// Apresentando dados em tela
console.log(varConstante); // Para executar esse script é necessário inserir o comando "node " + caminho.extensão do arquivo no terminal


// Pontos flutuantes (ou "Decimais")
const varDecimalPi = 3.1415;


// Dica!
// É possível usar a função Math.PI
const varPiPorFunção = Math.PI;
console.log("\nPi: " + varPiPorFunção); // "\n" => Enter para espaçar textos


// Ponto flutuante - zero
const varDecimalZero = .5; // Quando tratase de 0. algum número, é possível escrever somente . + algum número
console.log(varDecimalZero); // Visualiza "0.5" no terminal

// Retorno NaN => Not a Number
const varAlura = "Alura";
console.log(varAlura * varDecimalZero); // Visualiza "NaN" no terminal


// Divisão por zero
const varZero = 0;
const varNumeroAuxiliar = 10;
console.log("Divisão por zero: " + varNumeroAuxiliar / varZero); // Visualiza "Infinity" no terminal

// Nota!
// Em Javascript, zero dividido por zero retorna NaN.