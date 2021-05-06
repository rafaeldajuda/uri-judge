var input = require('fs').readFileSync('../stdin', 'utf-8');
var [a] = input.split(' ').map(item => parseInt(item));
var notas = [100, 50, 20, 10, 5, 2, 1];

//CALCULAR CEDULAS
console.log(a);
for(var i = 0; i < notas.length; i++){
    console.log(parseInt(a / notas[i]) + " nota(s) de R$ " + notas[i]+ ",00");
    a = a % notas[i];
}
