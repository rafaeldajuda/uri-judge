var input = require('fs').readFileSync('../stdin', 'utf-8');
var [a, b] = input.split(' ').map(item => parseInt(item));

var duracao = 0;
if(a == b){
    duracao = 24;
}else{
    for(var i = 0; i < 23; i++){
        duracao++;
        a++;

        if(a == 24){
            a = 0;
        }

        if(a == b){
            break;
        }
    }
}

console.log("O JOGO DUROU " + duracao + " HORA(S)");