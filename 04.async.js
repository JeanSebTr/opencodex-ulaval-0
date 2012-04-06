
// Les operations qui sont normalement "bloquantes" sont asynchrones dans nodejs


// Par exemple les operations sur les fichiers
var fs = require('fs');

var file = fs.createReadStream(__filename+'555');


file.on('data', function(data) {
    
    console.log(data);
    console.log(data.toString());
  });
  
file.on('error', function(err) {
  console.log(err);
  });





