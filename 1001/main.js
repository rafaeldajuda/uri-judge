var input = require('fs').readFileSync('stdin', 'utf-8');
var [a, b] = input.split("\n").map(item => parseInt(item));
var soma = a + b;

console.log("X = " + soma);