const prueba = './README.md';
const fs = require('fs');
const path = require('path');
const fetch = require('node-fetch');


// 1. Función que verifica si la ruta existe
const verifyRoute = (route) => {
  if (fs.existsSync(route)) {
    console.log('La ruta existe?', fs.existsSync(route));
    return fs.existsSync(route)
  } else {
    return console.log('La ruta no existe');
  }

}
verifyRoute('./tools/reading.word')

// 2. Función que verifica si la ruta es ABSOLUTA. Si no es absoluta, la covierte a absoluta
const typeRoute = (route) => {
  if (path.isAbsolute(route)) {
    console.log('Es una ruta absoluta?', path.isAbsolute(route))
    return path.isAbsolute(route)
  } else {
    console.log('No es una ruta a absoluta. Por tanto, la convertiremos en asboluta: ', path.resolve(route))
    return path.resolve(route);
  }
}
typeRoute('./tools/reading.word');
// 3. 1Función que verifica si la ruta es un directorio
const verifyDirectory = (absolutePath) => {
  //console.log(fs.statSync(absoluteRoute).isDirectory()); // cuando no existe la ruta arroja un error
  if (fs.statSync(absolutePath).isDirectory()) {
    return console.log('Esta ruta contiene un directorio', fs.statSync(absolutePath).isDirectory());
  } else {
    return console.log('Esta ruta no contiene un directorio');
  }
}
//verifyDirectory('D:\\Lab\\LIM018-md-links\\tools\\tools-files');
verifyDirectory('D:/Lab/LIM018-md-links/tools/tools-files');
// 3. 2Leer el directorio en búsqueda de un archivo

// 3. 3Función que verifica si la ruta contiene un ARCHIVO y muesta extensión del mismo
const verifyTypeOfExtension = (absolutePath) => {

  if (path.extname(absolutePath) == '.md') {
    console.log('Este archivo contiene un archivo .md')
    return true;
  } else {
    console.log('Este archivo no contiene un archivo .md');
    return false;

  }
}
verifyTypeOfExtension('./tools/reading.word')
//console.log(__dirname);

// 4. Leer los archivos .md y retornar un array de objetos¨
/**
 * This function gets a file path, extract the content and look for links
 * @param {string} absolutePath the path to look the content with desired links
 * @returns {array} array containing objects with links information
 */
const readFile = (absolutePath) => {
  //console.log(fs.readFileSync(absolutePath,'utf-8'))
  const arrLinks = [];
  if (absolutePath !== '') {
    const content = fs.readFileSync(absolutePath, 'utf-8');
    const http = /(\[(.*?)\])?\(http(.*?)\)/gm;
    const arrPaths = content.match(http);

    console.log(arrPaths)
    if (absolutePath !== '' && arrPaths !== null) {
      arrPaths.map((link) => {
        const text = link.slice(1, link.indexOf(']'));
        const href = link.slice(link.indexOf(']') + 2, link.indexOf(')'));
        const file = absolutePath;
        const obj = {
          href,
          text,
          file,
        }
        arrLinks.push(obj);
      });
    }

  }
  console.log(arrLinks)
  return arrLinks;
}
//readFiles('D:\\Lab\\LIM018-md-links\\tools\\tools-files');
readFile('D:/Lab/LIM018-md-links/tools/tool.md');
//readFiles('./tools/tool.md')

// console.log(readFiles('D:\\Lab\\LIM018-md-links\\tools\\tool.md'))
/**
 * This function gets a directory path, extract the content and look for links
 * @param {array} arrLinks, the path to look the content with desired links
 * @returns {promise} array containing objects with links information
 */

const checkLinks = (arrLinks) => {
  const checkedArr = arrLinks.map(links => new Promise((resolve, reject) => {
    fetch(links.href)
      .then(response => {
        if (response.status >= 200 && response.status < 400) {
          links.statusResponse = response.status;
          links.ok = response.statusText;
          resolve(links);
        } else {
          links.statusResponse = response.status;
          links.ok = 'Fail';
          resolve(links);
        }
      }).catch(() => {
        links.statusResponse = '';
        links.ok = 'Fail';
        resolve(links);
      });
  })
  );
  //console.log(Promise.all(checkedArr))

  //return Promise.all(checkedArr); 
  const unaPromesa = Promise.all(checkedArr);
  return unaPromesa;
};







// Lectura del directorio
/* const readDirectory = (absolutePath, arrLinks) => {
  console.log(arrLinks)
  const subDirectoryFiles = fs.readdirSync(absolutePath);
  console.log(subDirectoryFiles);
  subDirectoryFiles.forEach(directory => {
    const subPathAbsolute = path.join(absolutePath, directory);
    console.log(subDirectoryFiles);
    if(verifyDirectory(subDirectoryFiles)){
      const temporalDirectory = readDirectory(subDirectoryFiles,arrLinks);
      temporalDirectory.forEach(tempDirectory => {
        arrLinks.push(tempDirectory);
      })
    } else {
      if(verifyTypeOfExtension(subDirectoryFiles)){
        arrLinks = readFile(subPathAbsolute);
      }
    }
  });
  console.log(arrLinks)
  return arrLinks;
}

readDirectory('D:/Lab/LIM018-md-links/tools/tools-files',[
  {
    href: 'https://nodejs.org/es/',
    text: 'Node',
    file: 'D:/Lab/LIM018-md-links/tools/tools-files/'
  },
  {
    href: 'https://es.wikipedia.org/wiki/Markdown',
    text: 'Markdown',
    file: 'D:/Lab/LIM018-md-links/tools/tools-files/'
  }
])
 */
module.exports = {
  verifyRoute,
  typeRoute,
  verifyTypeOfExtension
};



