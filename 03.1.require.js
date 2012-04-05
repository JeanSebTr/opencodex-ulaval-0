

// moins d'une trentaire de modules "built-in" pour faire des operation de base


// #include <path> ?
// import nodejs.sys.os; ?

console.log(__filename);
console.log(__dirname);
console.log(path.dirname(__filename) == __dirname);


console.log('OS : ', os.type(), os.arch());
console.log('Ordi :', os.hostname());
