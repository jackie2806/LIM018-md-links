const fs = require('fs');
const path = require('path');
const fetch = require('node-fetch');

// 1. Función que verifica si la ruta existe
const verifyRoute = (route) => {
  if(fs.existsSync(route)){
    return true;
  }else{
    undefined;
  }}


// 2. Función que verifica si la ruta es ABSOLUTA. Si no es absoluta, la covierte a absoluta
const verifyAbsoluteRoute = (route) => {
  if (path.isAbsolute(route)) {
      return path.isAbsolute(route);
  } else {
      return path.resolve(route);
  }
}


// 3. Función que verifica si la ruta es un directorio
const verifyDirectoryOrFile = (absolutePath) => {
  const verifyFile = (absolutePath) => fs.statSync(absolutePath).isFile();
  if (verifyFile(absolutePath)) {
      return [absolutePath];
    } else  {
      const fileNames = fs.readdirSync(absolutePath);
      const newFileNames = fileNames.map((file) => verifyDirectoryOrFile(path.join(absolutePath,file))).flat(); 
      return newFileNames; 
  } 
 
}


// 4. Función que verifica si la ruta tiene un archivo con extensión .MD
const verifyExtensionMd = (absolutePath) => {
  if (path.extname(absolutePath) === '.md') {
    return true;
  } else {
    return false;
  }
}


// 5. Leer los archivos .md y retornar un array de objetos¨
/**
 * This function gets a file path with extension .md, then, extracts the content and looks for links
 * @param {string} filePath the path of file to look the content with desired links
 * @returns {array} array containing objects with links information
 */
const readFileWithExtensionMd = (filePath) => {
  //console.log(fs.readFileSync(absolutePath,'utf-8'))
  const arrLinks = [];
  if (filePath !== '') {
    const content = fs.readFileSync(filePath, 'utf-8');
    const http = /(\[(.*?)\])?\(http(.*?)\)/gm;
    const arrPaths = content.match(http);
    //console.log(arrPaths)
    if (filePath !== '' && arrPaths !== null) {
      arrPaths.map((link) => {
        const text = link.slice(1, link.indexOf(']'));
        const href = link.slice(link.indexOf(']') + 2, link.indexOf(')'));
        const file = filePath;
        const obj = {
          href,
          text,
          file,
        }
        arrLinks.push(obj);
      });
    }

  }
  return arrLinks;
}

// 6. Función que verifica los links
/**
 * This function checks if the links are broken or not
 * @param {array} arrLinks, the array contents the links for checking
 * @returns {promise} promise with links information
 */

const checkLinks = (arrLinks) => {
  const checkedArr = arrLinks.map(links => new Promise((resolve, reject) => {
    fetch(links.href)
      .then(response => {
        if (response.status >= 200 && response.status < 400) {
          links.status = response.status;
          links.message = response.statusText;
          resolve(links);
        } else {
          links.status = response.status;
          links.message = 'Fail';
          resolve(links);
        }
      })
      .catch(() => {
        links.status = 'Error';
        links.message = 'Fail';
        resolve(links);
      });
  })
  );
   const aPromiseOfArrLinks = Promise.all(checkedArr);
  return aPromiseOfArrLinks;
};

// 7. Estadísitcas
const totalStats = (arrLinks) => {
  return arrLinks.length;
}

const brokenStats = (arrLinks) => {
  const arrBrokenStats = arrLinks.filter((link) => link.message == 'Fail');
  return arrBrokenStats.length;
}

const uniqueStats = (arrLinks) => {
  const arrUniqueStats = [];
  arrLinks.forEach((link) => {
    if(arrUniqueStats.indexOf(link.href === -1)){
      arrUniqueStats.push(link.href);
    }
  }); 
  return arrUniqueStats.length;
}
/* console.log(uniqueStats([ {
  href: 'https://nodejs.or/es/',
  text: 'Node',
  file: 'D:/Lab/LIM018-md-links/tools/tool.md',
  status: '',
  message: 'Fail'
},
{
  href: 'https://nodejs.org/es/',
  text: 'Node',
  file: 'D:/Lab/LIM018-md-links/tools/tool.md',
  status: '',
  ok: 'Fail'
},
{
  href: 'https://es.wikipedia.org/wiki/Markdown',
  text: 'Markdown',
  file: 'D:/Lab/LIM018-md-links/tools/tool.md',
  status: 200,
  message: 'OK'
}
  
]))
 */
module.exports = {
  verifyRoute,
  verifyAbsoluteRoute,
  verifyDirectoryOrFile,
  verifyExtensionMd,
  readFileWithExtensionMd,
  checkLinks,
  totalStats,
  brokenStats,
  uniqueStats,
};



