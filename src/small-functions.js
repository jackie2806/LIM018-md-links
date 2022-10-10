const prueba = './README.md';
// console.log(prueba);
// en index.js irá la función mdLink
// Test: usar espías 
//path fs import 
// Métodos de Node (path / fs)
// const { existsSync } = require('fs'); // desestructuración de objetos
const fs = require('fs');
const path = require('path');


// 1. Función que verifica si la ruta existe
const verifyRoute = (route) => {
  if( fs.existsSync(route)){
    console.log('La ruta existe?', fs.existsSync(route));
    return fs.existsSync(route)
  } else {
    return console.log('La ruta no existe');
  }
 
}
verifyRoute('./tools/reading.word')

// 2. Función que verifica si la ruta es ABSOLUTA. Si no es absoluta, la covierte a absoluta
const typeRoute = (route) => {
  if(path.isAbsolute(route)){
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
   if(fs.statSync(absolutePath).isDirectory()){
    return  console.log('Esta ruta contiene un directorio', fs.statSync(absolutePath).isDirectory());
  } else {
    return console.log('Esta ruta no contiene un directorio');
  }
}
//verifyDirectory('D:\\Lab\\LIM018-md-links\\tools\\tools-files');
verifyDirectory('D:/Lab/LIM018-md-links/tools/tools-files');
// 3. 2Leer el directorio en búsqueda de un archivo

// 3. 3Función que verifica si la ruta contiene un ARCHIVO y muesta extensión del mismo
const verifyTypeOfExtension = (absolutePath) => {

  if(path.extname(absolutePath)=='.md'){
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
const readFiles = (absolutePath) => {
  //console.log(fs.readFileSync(absolutePath,'utf-8'))
  const arrLinks = [];
  if(absolutePath !== ''){  
    const content = fs.readFileSync(absolutePath,'utf-8');
    const http = /(\[(.*?)\])?\(http(.*?)\)/gm;
    const arrPaths = content.match(http);
    
    console.log(arrPaths)
    if(absolutePath !=='' && arrPaths !== null){
      arrPaths.map((link) => {
        const text = link.slice(1, link.indexOf(']'));
        const href = link.slice(link.indexOf(']')+2, link.indexOf(')'));
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
readFiles('D:/Lab/LIM018-md-links/tools/tool.md');
//readFiles('./tools/tool.md')

// console.log(readFiles('D:\\Lab\\LIM018-md-links\\tools\\tool.md'))
module.exports = {
  verifyRoute,
  typeRoute,
  verifyTypeOfExtension
}; 





// Explicación de desestructuración de objetos
/* const myObj = {
    nameX: 'rita',
    lastName: 'acevedo'
}

//const name = myObj.name;
//const lastName = myObj.lastName;

const { nameX, lastName } = myObj

console.log(nameX, lastName)

module.exports = {
    existsSync: function () {

    },
} */

//Haciendo pruebas con Node
/* let miNombre = process.env.NOMBRE || 'Sin nombre';
console.log('Hola, '+ miNombre); */

// Comprensión de la asincronía
/* function soyAsincrona(miCallback){
  setTimeout(() => {
    console.log('Estoy siendo asíncrona');
    miCallback();
  }, 1000);

}
console.log('Iniciando proceso...');
soyAsincrona(function(){
  console.log('Terminando proceso');
}) */
// Algunas cositas de NODE muy útiles 
/*
console.log(__dirname);
console.log(__filename); 
console.table();
const os = require('os');
console.log(os.arch());
console.log(os.platform());
console.log(os.cpus().length);
const SIZE = 1024;
function kb(bytes) { return bytes / SIZE}
function mb(bytes) { return kb(bytes) / SIZE}
function gb(bytes) { return mb(bytes) / SIZE}
console.log(os.freemem());
console.log(kb(os.freemem()));
console.log(mb(os.freemem()));
console.log(gb(os.freemem()));
console.log(gb(os.totalmem())); 
*/
