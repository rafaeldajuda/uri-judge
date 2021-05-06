var input = require('fs').readFileSync('../stdin', 'utf-8');
var [a] = input.split(' ').map(item => parseFloat(item));

var ano = parseInt(a / 365);
var mes = parseInt((a % 365) / 30);
var dia = parseInt((a % 365) % 30);



console.log(ano + " ano(s)\n" +
            mes + " mes(es)\n" +
            dia + " dia(s)");

