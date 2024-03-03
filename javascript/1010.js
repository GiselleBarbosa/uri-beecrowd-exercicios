var input = require("fs").readFileSync("stdin", "utf8");

var linhas = input.split("\n");

var [idPeca1, qtdP1, valorUnitarioP1] = linhas.shift().split(" ");
var [idPeca2, qtdP2, valorUnitarioP2] = linhas.shift().split(" ");

totalPeca1 = (valorUnitarioP1 * qtdP1)
totalPeca2 = (valorUnitarioP2 * qtdP2)

valorAPagar = totalPeca1 + totalPeca2

console.log("VALOR A PAGAR: R$ "+ valorAPagar.toFixed(2));
