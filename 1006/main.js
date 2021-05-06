var input = require('fs').readFileSync('../stdin', 'utf-8');
var [a, b, c] = input.split('\n').map(item => parseFloat(item));
var media = ((a * 2) + (b * 3) + (c * 5)) / 10;

console.log("MEDIA = " + media.toFixed(1));