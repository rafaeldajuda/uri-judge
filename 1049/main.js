var input = require('fs').readFileSync('../stdin', 'utf-8');
var [a, b, c] = input.split('\n');

var resultado = "";

if(b == "ave"){
    if(c == "carnivoro"){
        resultado = "aguia";
    }else{
        resultado = "pomba";
    }
}else if(b == "mamifero"){
    if(c == "onivoro"){
        resultado = "homem";
    }else{
        resultado = "vaca";
    }
}else if(b == "inseto"){
    if(c == "hematofago"){
        resultado = "pulga";
    }else{
        resultado = "lagarta";
    }
}else if(b == "anelideo"){
    if(c == "hematofago"){
        resultado = "sanguessuga";
    }else{
        resultado = "minhoca";
    }
}

console.log(resultado);