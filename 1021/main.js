var input = require('fs').readFileSync('../stdin', 'utf-8');
var [a] = input.split(' ').map(item => parseFloat(item));
var notas = [100, 50, 20, 10, 5, 2, 1, 0.50, 0.25, 0.10, 0.05, 0.01];

//CALCULAR CEDULAS
console.log("NOTAS:");
for(var i = 0; i < notas.length; i++){
    if(notas[i] > 1){
        console.log(parseInt(a / notas[i]) + " nota(s) de R$ " + notas[i].toFixed(2));
    }else{
        if(notas[i] == 1){
            console.log("MOEDAS:");
        }
        console.log(parseInt(a / notas[i]) + " moeda(s) de R$ " + notas[i].toFixed(2));
    }
    a = (a % notas[i]).toFixed(2);
}