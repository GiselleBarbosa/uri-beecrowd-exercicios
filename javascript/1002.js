var input = require("fs").readFileSync("stdin", "utf8");

var PI = 3.14159;
var raio = parseFloat(input);

/* ou 
var area = PI * Math.pow(raio, 2);

*/

var area = (PI * raio ** 2).toFixed(4);

console.log("A=" + area);
