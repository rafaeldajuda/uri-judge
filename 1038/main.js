var input = require('fs').readFileSync('../stdin', 'utf-8');
var [a, b] = input.split(' ').map(item => parseFloat(item));

var tabela = {
    1: 4,
    2: 4.50,
    3: 5,
    4: 2,
    5: 1.5
}

console.log("Total: R$ " + (tabela[a] * b).toFixed(2));
