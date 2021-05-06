var input = require('fs').readFileSync('../stdin', 'utf-8');
var [a, b, c] = input.split(' ').map(item => parseInt(item));

var valor1 = (a + b + (Math.abs(a - b))) / 2;
var valor2 = c;

if(valor1 > c){
    maior = valor1
}else{
    maior = valor2;
}

console.log(maior + " eh o maior");