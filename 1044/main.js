var input = require('fs').readFileSync('../stdin', 'utf-8');
var [a, b] = input.split(' ').map(function(item){
                                        return parseInt(item);
                                    });
var resultado = a % b == 0 || b % a == 0? "Sao Multiplos": "Nao sao Multiplos";
console.log(resultado)
