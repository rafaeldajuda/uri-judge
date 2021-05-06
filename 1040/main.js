var input = require('fs').readFileSync('../stdin', 'utf-8');
input = input.split('\n')
var [a, b, c, d] = input[0].split(' ').map(item => parseFloat(item));
if(input.length > 1){
    var e = input[1].split(' ').map(item => parseFloat(item));
}

var media = ((a*2) + (b*3) + (c*4) + (d*1)) / 10;
console.log("Media: " + media.toFixed(1));

if(media >= 7){
    console.log("Aluno aprovado.");
}else if(media < 5){
    console.log("Aluno reprovado.");
}else{
    console.log("Aluno em exame.");
    console.log("Nota do exame: " + parseFloat(e).toFixed(1));
    var mediaFinal = (parseFloat(media) + parseFloat(e)) / 2;

    if(mediaFinal >= 5){
        console.log("Aluno aprovado.");
    }else{
        console.log("Aluno reprovado.");
    }

    console.log("Media final: " + mediaFinal.toFixed(1));
}


