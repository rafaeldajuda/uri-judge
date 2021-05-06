var input = require('fs').readFileSync('../stdin', 'utf-8');
var numbers = input.split(' ').map(item => parseFloat(item));
var aux = input.split(' ').map(item => parseFloat(item));

//FUNCAO DE COMPARACAO E ORDENACAO
aux.sort(function(a, b){
    return a - b;
});

for(var x of aux){
    console.log(x);
}

console.log();
for(var x of numbers){
    console.log(x);
}



