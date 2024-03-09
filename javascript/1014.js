var input = require("fs").readFileSync("/dev/stdin", "utf8");
var lines = input.split("\n");

var distancia = lines.shift();
var combustivel = lines.shift();

var consumoMedio = distancia / combustivel;

console.log(`${consumoMedio.toFixed(3)} km/l`);