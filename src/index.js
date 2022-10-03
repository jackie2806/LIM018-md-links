module.exports = () => {
};

//Haciendo pruebas con Node
/* let miNombre = process.env.NOMBRE || 'Sin nombre';
console.log('Hola, '+ miNombre); */

const prueba = './README.md';
console.log(prueba);
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
// en index.js irá la función mdLink
// Instalar jest slint npm 
// Test: usar espías 
//path fs import 
// Métodos de Node (path / fs)
const { existsSync } = require('fs'); // desestructuración de objetos
const path = require('path');


// 1. Función que verifica si la ruta existe
const verifyRoute = (route) => {
  console.log(existsSync(route));
  return existsSync(route)
}
verifyRoute('./tools/reading.word')

// 2. Función que verifica el tipo de ruta

// 3. Función que lee la extensión del archivo

// 4. Implementar los test
