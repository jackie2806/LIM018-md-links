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
const verifyDirectory = (absoluteRoute) => {
  //console.log(fs.statSync(absoluteRoute).isDirectory()); // cuando no existe la ruta arroja un error
   if(fs.statSync(absoluteRoute).isDirectory()){
    return  console.log('Esta ruta contiene un directorio', fs.statSync(absoluteRoute).isDirectory());
  } else {
    return console.log('Esta ruta no contiene un directorio');
  }
}
verifyDirectory('D:\\Lab\\LIM018-md-links\\tools');
// 3. 2Función que verifica si la ruta contiene un ARCHIVO y muesta extensión del mismo
const readFile = (route) => {

  if (path.extname(route)){
    console.log('La ruta contiene un archivo con extensión:', path.extname(route))
    return path.extname(route);
    
  } else {
    console.log('Esta ruta no contiene ningún archivo')
  }
  
}
readFile('./tools/reading.word')


module.exports = {
  verifyRoute,
  typeRoute,
  readFile,
}; 

/* module.exports = () =>{
  verifyRoute,
  typeRoute
} */
// README expresiones regulares 



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
