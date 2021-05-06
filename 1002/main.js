var input = require('fs').readFileSync('../stdin', 'utf-8');
var r = parseFloat(input);
var PI = 3.14159;
var area = PI * (r*r);

console.log("A=" + area.toFixed(4));