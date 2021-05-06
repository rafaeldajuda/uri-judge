var input = require('fs').readFileSync('../stdin', 'utf-8');
var [a, b, c] = input.split(' ').map(item => parseFloat(item));

var delta = (b*b) - 4 * a * c;
var x1 = (-b + Math.sqrt(delta))/(2*a);
var x2 = (-b - Math.sqrt(delta))/(2*a);

if(a == 0){
    console.log("Impossivel calcular");
}else if(delta < 0){
    console.log("Impossivel calcular");
}else{
    console.log("R1 = " + x1.toFixed(5) + "\nR2 = " + x2.toFixed(5));
}


