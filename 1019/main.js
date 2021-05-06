var input = require('fs').readFileSync('../stdin', 'utf-8');
var [a] = input.split(' ').map(item => parseInt(item));

var segundo = a % 60;
var minuto = (parseInt(a / 60) > 59?parseInt(a / 60) % 60:parseInt(a / 60));
var hora = parseInt(a / 60 / 60);

console.log(hora + ":" + minuto + ":" + segundo);

