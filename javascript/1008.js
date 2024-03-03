var input = require("fs").readFileSync("stdin", "utf8");

var valores = input.split("\n");

var A = parseInt(valores.shift());
var B = parseInt(valores.shift());
var C = parseFloat(valores.shift());

NUMBER = A;
SALARY = B * C

console.log("NUMBER = " + NUMBER + "\n" + "SALARY = U$ " + SALARY.toFixed(2));