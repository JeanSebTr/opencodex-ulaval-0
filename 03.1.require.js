

// moins d'une trentaire de modules "built-in" pour faire des operation de base


// #include <path> ?
// import nodejs.sys.os; ?

var path = require('path');
var os = require('os');

console.log(__filename);
console.log(__dirname);
console.log(path.dirname(__filename) == __dirname);


console.log('OS : ', os.type(), os.arch());
console.log('Ordi :', os.hostname());

var methode = require('./03.2.module.js').methode;

console.log(methode());
