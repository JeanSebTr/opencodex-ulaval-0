
// commme pour tout projet on va repartir notre code dans plusieurs fichiers

// J'ai cree une fonction super cool que j'aimerais reutiliser ailleur :

var os = require('os');


function MaFonctionSuperCool() {
  return {
    ordinateur: os.hostname(),
    os: os.type()+' '+os.arch(),
    freememory: os.freemem(),
    libre: Math.round(os.freemem()/os.totalmem()*100)+' %'
  };
}



module.exports = {
  methode: MaFonctionSuperCool
  
  };



