var input = require('fs').readFileSync('../stdin', 'utf-8');
var [a] = input.split(' ').map(item => parseFloat(item));

var PI = 3.14159;
var volume = (4/3) * PI * Math.pow(a, 3);

console.log("VOLUME = " + volume.toFixed(3));