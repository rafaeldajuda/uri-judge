var input = require('fs').readFileSync('../stdin', 'utf-8');
input = input.split('\n');
var a = parseInt(input[0]);
var b = parseInt(input[1]);
var c = parseFloat(input[2]);

var salario = b * c;

console.log("NUMBER = " + a + "\nSALARY = U$ " + salario.toFixed(2));