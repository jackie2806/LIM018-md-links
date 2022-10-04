
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
  console.log('La ruta existe?', fs.existsSync(route));
  return fs.existsSync(route)
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

// 3. Función que verifica si la ruta contiene un ARCHIVO y lo lee
const readFile = (route) => {
  if (path.extname(route)){
    console.log('La ruta contiene un archivo: ', path.extname(route))
  } else {
    console.log('Esta ruta no contiene ningún archivo')
  }
  
}
readFile('./tools/reading.word')


module.exports = () => {
};