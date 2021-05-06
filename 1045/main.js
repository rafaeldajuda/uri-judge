var input = require('fs').readFileSync('../stdin', 'utf-8');
var lados = input.split(' ').map(function(item){
                                        return parseFloat(item);
                                    });

//ORDENAR ARRAY
lados.sort((a,b) => b-a);

if(lados[0] >= lados[1]+lados[2]){
    console.log('NAO FORMA TRIANGULO');
}else{
    if(quadrado(lados[0]) == quadrado(lados[1]) + quadrado(lados[2])){
        console.log('TRIANGULO RETANGULO');
    }
    if(quadrado(lados[0]) > quadrado(lados[1]) + quadrado(lados[2])){
        console.log('TRIANGULO OBTUSANGULO');
    }
    if(quadrado(lados[0]) < quadrado(lados[1]) + quadrado(lados[2])){
        console.log('TRIANGULO ACUTANGULO');
    }
    if(lados[0] == lados[1] && lados[0] == lados[2]){
        console.log('TRIANGULO EQUILATERO');
    }
    if((lados[0] == lados[1] && lados[0] != lados[2]) || (lados[1] == lados[2] && lados[1] != lados[0])){
        console.log('TRIANGULO ISOSCELES');
    }
}

function quadrado(x){
    return Math.pow(x, 2);
}