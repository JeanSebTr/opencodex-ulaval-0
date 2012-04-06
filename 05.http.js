

// L'API de Nodejs inclu tout le  nécessaire pour faire du réseau

// Notamment pour faire un serveur HTTP

var http = require('http');


var server = http.createServer(function(req, res) {
    console.log('Une requête ! :D');
    
    console.log(req.url);
    
    res.writeHead(200, {'Content-Type' : 'text/plain'});
    res.write('Hello world !');
    
    res.end();
    
  });

server.listen(process.env.PORT);
