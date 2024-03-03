var input = require("fs").readFileSync("stdin", "utf8");

var valoresInteiros = input.split("\n");

var A = parseInt(valoresInteiros.shift());
var B = parseInt(valoresInteiros.shift());

var PROD = A * B

console.log("PROD = " + PROD);