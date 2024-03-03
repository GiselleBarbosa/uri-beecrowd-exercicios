var input = require("fs").readFileSync("stdin", "utf8");

const [A, B, C] = input.split(" ").map(item => parseInt(item));

const MaiorAB = (A + B + Math.abs(A - B)) / 2;
const maiorXC = (C + MaiorAB + Math.abs(C - MaiorAB)) / 2;


console.log(maiorXC + " eh o maior");

/* var input = require("fs").readFileSync("stdin", "utf8");

var valores = input.split(" ");

var A = parseInt(valores.shift());
var B = parseInt(valores.shift());
var C = parseInt(valores.shift());

var MaiorAB = [A, B, C]

var MaiorValor = Math.max(...MaiorAB)

console.log(MaiorValor +" eh o maior"); */


/**/
/* 
var input = require("fs").readFileSync("stdin", "utf8");
var valores = input.split(" ");

var a = parseInt(valores.shift());
var b = parseInt(valores.shift());
var c = parseInt(valores.shift());

if (c > a & c > b) {
    return console.log(c + " eh o maior");
}
if (b > a & b > c) {
    return console.log(b + " eh o maior");
}
if (a > b & a > c) {
    return console.log(a + " eh o maior");
}

 */