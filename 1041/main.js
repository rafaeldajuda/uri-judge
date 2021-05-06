var input = require('fs').readFileSync('../stdin', 'utf-8');
var [x, y] = input.split(' ').map(item => parseFloat(item));

if(x == 0 && y == x){
    console.log("Origem");
}else if(x == 0 && y != x){
    console.log("Eixo Y");
}else if(y == 0 && y != x){
    console.log("Eixo X");
}else if(x > 0 && y > 0){
    console.log("Q1");
}else if(x < 0 && y < 0){
    console.log("Q3");
}else if(x < 0 && y > 0){
    console.log("Q2");
}else if(x > 0 && y < 0){
    console.log("Q4");
}
