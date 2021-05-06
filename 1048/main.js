var input = require('fs').readFileSync('../stdin', 'utf-8');
var [a] = input.split(' ').map(item => parseFloat(item));

var porcentagem;

if(a <= 400){
    porcentagem = 15;
    calcularSalarioNovo(porcentagem, a);
}else if(a <= 800){
    porcentagem = 12;
    calcularSalarioNovo(porcentagem, a);
}else if(a <= 1200){
    porcentagem = 10;
    calcularSalarioNovo(porcentagem, a);
}else if(a <= 2000){
    porcentagem = 7;
    calcularSalarioNovo(porcentagem, a);
}else{
    porcentagem = 4;
    calcularSalarioNovo(porcentagem, a);
}

function calcularSalarioNovo(percentual, salario){
    var reajuste = (salario * percentual / 100).toFixed(2);
    var novoSalario = (parseFloat(salario) + parseFloat(reajuste)).toFixed(2);

    console.log("Novo salario: " + novoSalario + "\n" +
            "Reajuste ganho: " + reajuste + "\n" + 
            "Em percentual: " + percentual + " %");
}