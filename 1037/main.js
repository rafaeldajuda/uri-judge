var input = require('fs').readFileSync('../stdin', 'utf-8');
var a = input.split(' ').map(item => parseFloat(item));

if(a < 0 || a > 100){
    console.log("Fora de intervalo");
}else if(a >=0 && a <= 25){
    console.log("Intervalo [0,25]");
}else if(a >25 && a <= 50){
    console.log("Intervalo (25,50]");
}else if(a >50 && a <= 75){
    console.log("Intervalo (50,75]");
}else if(a >75 && a <= 100){
    console.log("Intervalo (75,100]");
}

