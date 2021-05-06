var input = require('fs').readFileSync('../stdin', 'utf-8');
var [a, b] = input.split('\n').map(item => parseFloat(item));

var valor = a * b / 12;

console.log(valor.toFixed(3));