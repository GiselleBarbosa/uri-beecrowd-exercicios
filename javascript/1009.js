var input = require("fs").readFileSync("stdin", "utf8");
var valores = input.split("\n");

var nome = toString(valores.shift())
var salarioFixo = parseFloat(valores.shift());
var totalVendido = parseFloat(valores.shift());


vendedor = nome;
totalVendido = (totalVendido * 15) / 100 + salarioFixo

console.log("TOTAL = R$ " + totalVendido.toFixed(2));