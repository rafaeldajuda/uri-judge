var input = require('fs').readFileSync('../stdin', 'utf-8');
var [a, b] = input.split('\n').map(item => parseFloat(item));

var valor1 = a / b;


console.log(valor1.toFixed(3) + " km/l");