var input = require('fs').readFileSync('../stdin', 'utf-8');
var [a, b, c, d] = input.split(' ').map(item => parseInt(item));
var resultado = "Valores nao aceitos";

if(b > c && d > a){
    if(c+d > a+b){
        if(c > 0 && d > 0){
            if(a % 2 == 0){
                resultado = "Valores aceitos"
            }
        }
    }
}

console.log(resultado);