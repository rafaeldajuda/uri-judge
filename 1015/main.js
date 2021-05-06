var input = require('fs').readFileSync('../stdin', 'utf-8');
input = input.split('\n');
var [a, b] = input[0].split(' ').map(item => parseFloat(item));
var [c, d] = input[1].split(' ').map(item => parseFloat(item));

var resultado = Math.sqrt(Math.pow(c - a, 2) + Math.pow(d - b, 2));

console.log(resultado.toFixed(4));