var input = require('fs').readFileSync('../stdin', 'utf-8');
input = input.split('\n');
var nome = (input[0]);
var salario = parseFloat(input[1]);
var vendas = parseFloat(input[2]);
var salarioTotal = vendas * 15 / 100 + salario;

console.log("TOTAL = R$ " + salarioTotal.toFixed(2));