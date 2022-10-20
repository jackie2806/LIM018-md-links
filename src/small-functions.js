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

// 3. Función que devuelve la ruta absoluta de un file dentro de un array (si la ruta es un file). 
// En caso la ruta sea un directorio, lee el directorio y devuelve un array con las rutas de archivos.
const verifyDirectoryOrFile = (absolutePath) => {
  const verifyFile = (absolutePath) => fs.statSync(absolutePath).isFile();
  if (verifyFile(absolutePath)) {
      return [absolutePath];
    } else  {
      const fileNames = fs.readdirSync(absolutePath);
      const arrFileNames = fileNames.map((file) => verifyDirectoryOrFile(path.join(absolutePath,file))).flat(); 
      return arrFileNames; 
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
  //console.log('Soy una ruta', filePath);
  const arrLinks = [];
  
  if (filePath !== '') {
    const content = fs.readFileSync(filePath, 'utf-8');
    const http = /(\[(.*?)\])?\(http(.*?)\)/gm;
    const arrFoundLinks = content.match(http);
    // console.log('Array de Links encontrados', arrFoundLinks);
    if (filePath !== '' && arrLinks !== null) {
      arrFoundLinks.map((link) => {
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
  // console.log('Array de objetos', arrObjLinks)
  return arrLinks;
}
// console.log(readFileWithExtensionMd('D:\\Lab\\LIM018-md-links\\tools\\tool.md'))
// 6. Función que devuelve los links que se encontraron dentro de los archivos .md
const obtainLinks = (absolutePath) => {
  //console.log('o', absolutePath)
  let arrFiles = verifyDirectoryOrFile(absolutePath);
  arrFiles = arrFiles.filter((file) => path.extname(file) === '.md');
  const arrLinks = arrFiles.map((file) => 
    readFileWithExtensionMd(file)).filter((file) => typeof file !== 'string').flat();
    return arrLinks;

}

// 7. Función que verifica los links
/**
 * This function checks if the links are broken or not
 * @param {array} arrLinks, the array contents the links for checking
 * @returns {promise} promise with links information
 */

const checkLinks = (arrLinks) => {
  const checkedArr = arrLinks.map(links => new Promise((resolve, reject) => {
    fetch(links.href) // petición de consulta
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
        console.log('Soy un error')
        links.status = 'Error';
        links.message = 'Fail';
        resolve(links);
      });
  })
  );
   const aPromiseOfArrLinks = Promise.all(checkedArr);
  return aPromiseOfArrLinks;
};
/*  checkLinks([
  {
    href: 'https://www.geeksforgeeks.o/node-js-fs-readfilesync-method/?id=discuss',
    text: 'Node',
    file: 'D:\\Lab\\LIM018-md-links\\tools\\tool.md',
    status: 200,
    message: 'OK'
  },
  
]).then(console.log)  */
//mdLinks('./tools/', {validate : true}).then(console.log);

// 8. Estadísitcas
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

module.exports = {
  verifyRoute,
  verifyAbsoluteRoute,
  verifyDirectoryOrFile,
  verifyExtensionMd,
  readFileWithExtensionMd,
  obtainLinks,    
  checkLinks,
  totalStats,
  brokenStats,
  uniqueStats,
};



