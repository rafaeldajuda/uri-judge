var input = require('fs').readFileSync('../stdin', 'utf-8');
var ddd = input.split("\n");

switch(ddd[0]){
    case "61":
        console.log("Brasilia");
        break;
    case "71":
        console.log("Salvador");
        break;
    case "11":
        console.log("Sao Paulo");
        break;
    case "21":
        console.log("Rio de Janeiro");
        break;
    case "32":
        console.log("Juiz de Fora");
        break;
    case "19":
        console.log("Campinas");
        break;
    case "27":
        console.log("Vitoria");
        break;
    case "32":
        console.log("Belo Horizonte");
        break;
    default:
        console.log("DDD nao cadastrado");
}