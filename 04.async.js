
// Les operations qui sont normalement "bloquantes" sont asynchrones dans nodejs


// Par exemple les operations sur les fichiers
var fs = require('fs');

var file = fs.createReadStream(__filename);

file.setEncoding('uft8');

var data = file.read(); // ?!





