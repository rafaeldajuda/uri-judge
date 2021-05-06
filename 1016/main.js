var input = require('fs').readFileSync('../stdin', 'utf-8');
var [a] = input.split(' ').map(item => parseFloat(item));

var minutos = a * 60 / 30;

console.log(minutos + " minutos");