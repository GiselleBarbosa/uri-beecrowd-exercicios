var input = require("fs").readFileSync("stdin", "utf8");

var valores = input.split("\n");
var valores = input.split(" ");

var A = parseFloat(valores.shift());
var B = parseFloat(valores.shift());
var C = parseFloat(valores.shift());

var areaTrianguloRetangulo = parseFloat(valores.shift());
var areaCirculo = parseFloat(valores.shift());
var areaTrapezio = parseFloat(valores.shift());
var areaQuadrado = parseFloat(valores.shift());
var areaRetangulo = parseFloat(valores.shift());
var PI = 3.14159;

areaTrianguloRetangulo = A * C / 2
areaCirculo = PI * C ** 2
areaTrapezio = (A + B) * C / 2 
areaQuadrado = B * B 
areaRetangulo = A * B 

console.log("TRIANGULO: " + areaTrianguloRetangulo.toFixed(3));
console.log("CIRCULO: " + areaCirculo.toFixed(3));
console.log("TRAPEZIO: " + areaTrapezio.toFixed(3));
console.log("QUADRADO: " + areaQuadrado.toFixed(3));
console.log("RETANGULO: " + areaRetangulo.toFixed(3));