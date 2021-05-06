var input = require('fs').readFileSync('../stdin', 'utf-8');
var [a, b, c] = input.split(' ').map(function(item){
                                        return parseFloat(item);
                                    });
var ab = a + b > c ? true: false;
var bc = b + c > a ? true: false;
var ca = c + a > b ? true: false;

if(ab == true && bc == true && ca == true){
    var perimetro = (a+b+c).toFixed(1);
    console.log('Perimetro = ' + perimetro);
}else{
    var area = (((a+b)*c/2)).toFixed(1);
    console.log('Area = ' + area);
}
