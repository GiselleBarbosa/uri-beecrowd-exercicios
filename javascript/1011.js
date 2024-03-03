var input = require("fs").readFileSync("stdin", "utf8");
var valores = input.split("\n");

var R = parseFloat(valores.shift());
var PI =  3.14159;

var volume = (PI * R**3) * (4/3.0);

console.log("VOLUME = " + volume.toFixed(3));