const fn = require('./src/index.js');

const mdLinks = (route, options) => {
  const promise =  new Promise((resolve, reject) => {
    if(!fn.verifyRoute(route)){
      reject(new Error('La ruta no existe'));
    }
    // Verificar el tipo de ruta
    // ¿Es una ruta absoluta?
    // ¿Es un directorio? Leer el contenido del directorio
    // ¿Es un archivo md.
    // ¿El archivo tiene links?
    // Array del arreglo con los links
    // Options (validate)
    // Validate Sí: Validar cada links por medio de peticiones HTTP ->> href, text, file, status, Ok
    // Validate No: retorna href, text, file 
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
