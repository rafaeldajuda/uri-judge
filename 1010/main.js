var input = require('fs').readFileSync('../stdin', 'utf-8');
input = input.split('\n');

var [a, b, c] =  input[0].split(' ').map(item => parseFloat(item));
var [d, e, f] = input[1].split(' ').map(item => parseFloat(item));

var valor1 = b * c;
var valor2 = e * f;
var total = valor1 + valor2;

console.log("VALOR A PAGAR: R$ " + total.toFixed(2));