var input = require('fs').readFileSync('../stdin', 'utf-8');
var [a, b, c] = input.split(' ').map(item => parseFloat(item));
var PI = 3.14159;

var triangulo = a * c / 2;
var circulo = PI * (c * c);
var trapezio = ((a + b) * c) / 2;
var quadrado = b * b;
var retangulo = a * b;

console.log("TRIANGULO: " + triangulo.toFixed(3) + "\n" +
            "CIRCULO: " + circulo.toFixed(3) + "\n" +
            "TRAPEZIO: " + trapezio.toFixed(3) + "\n" +
            "QUADRADO: " + quadrado.toFixed(3) + "\n" +
            "RETANGULO: " + retangulo.toFixed(3));