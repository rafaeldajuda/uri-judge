var input = require('fs').readFileSync('../stdin', 'utf-8');

var dici_ddd = {
    61: "Brasilia",
    71: "Salvador",
    11: "Sao Paulo",
    21: "Rio de Janeiro",
    32: "Juiz de Fora",
    19: "Campinas",
    27: "Vitoria",
    31: "Belo Horizonte"
}

console.log(dici_ddd[input] == undefined?"DDD nao cadastrado":dici_ddd[input]);
