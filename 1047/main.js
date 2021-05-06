var input = require('fs').readFileSync('../stdin', 'utf-8');
var [a, b, c, d] = input.split(' ').map(item => parseInt(item));

var duracaoHora = 0;
var duracaoMinuto = 0;
if(a == c && b == d){
    duracaoHora = 24;
    duracaoMinuto = 0;
}else{
    for(var i = 0; i < 3600; i++){
        duracaoMinuto++;
        b++;

        //ZERA OS MINUTOS QUANDO COMPLETA 1H
        if(duracaoMinuto == 60){
            duracaoMinuto = 0;
            duracaoHora++;
        }

        //CONTADOR DE MINUTOS E HORAS
        if(b == 60){
            b = 0;
            a++;
            if(a == 24){
                a = 0;
            }
        }

        if(a == c && b == d){
            break;
        }

    }
}

console.log("O JOGO DUROU " + duracaoHora + " HORA(S) E " + duracaoMinuto + " MINUTO(S)");