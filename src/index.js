const fn = require('./src/index.js');

const mdLinks = () => {
  const promise =  new Promise((resolve, reject) => {
    if(!fn.verifyRoute(route)){
      reject(new Error('La ruta no existe'));
    }
   
    // ...
    /* checkLinks([
      {
        href: 'https://nodejs.org/es/',
        text: 'Node',
        file: 'D:/Lab/LIM018-md-links/tools/tool.md'
      },
      {
        href: 'https://es.wikipedia.org/wiki/Markdown',
        text: 'Markdown',
        file: 'D:/Lab/LIM018-md-links/tools/tool.md'
      }
    ]).then((res) => resolve(res))
  }) */
}


// mdLinks().then(console.log)
