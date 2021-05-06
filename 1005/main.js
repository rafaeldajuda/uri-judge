var input = require('fs').readFileSync('../stdin', 'utf-8');
var [a, b] = input.split("\n").map(item => parseFloat(item));
var pa = 3.5;
var pb = 7.5;

var prod = ((a * pa) + (b * pb) )/ 11;
console.log("MEDIA = " + prod.toFixed(5));