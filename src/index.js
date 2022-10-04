
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

// 2. Función que verifica el tipo de ruta. Si no es absoluta, la covierte a absoluta
const typeRoute = (route) => {
  console.log('Es una ruta absoluta?', path.isAbsolute(route))
  if(path.isAbsolute(route)){
    return path.isAbsolute(route)
  } else {
    console.log('Conversión de la ruta a absoluta: ', path.resolve(route))
    return path.resolve(route);
  }
}
typeRoute('./tools/reading.word');

// 3. Función que lee la extensión del archivo




module.exports = () => {
};