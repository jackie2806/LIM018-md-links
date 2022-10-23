//const { checkLinks } = require('./small-functions.js');
const objFn = require("../src/small-functions.js");

const mdLinks = (route, options) => {
  const promise = new Promise((resolve, reject) => {
    let arrLinks = [];
    // console.log(arrLinks);
    // Verifica si la ruta existe
    if (!objFn.verifyRoute(route)) {
      reject(new Error("La ruta no existe, ingrese una ruta válida"));
    }
    // ¿Es una ruta absoluta?
    const absolulteRoute = objFn.verifyAbsoluteRoute(route);
    // Verifico si se trata de un archivo o de un directorio
    const arrAbsoluteRoute = objFn.verifyDirectoryOrFile(absolulteRoute); //Devuelvo un array con
    // console.log('Array Rutas', arrAbsoluteRoute)
    // console.log(typeof arrAbsoluteRoute)
    if (arrAbsoluteRoute.length > 0) {
      // verificar si cada elemento del array de rutas absolutas es un archivo .md

      if (arrAbsoluteRoute.length === 1) {
        // Array que solo tiene un elemento, que es una ruta absoluta con un file
        if (objFn.verifyExtensionMd(arrAbsoluteRoute[0])) {
          arrLinks = objFn.readFileWithExtensionMd(arrAbsoluteRoute[0]);
        } else {
          reject(new Error("No es un archivo .md"));
        }
      } else {
        // Array con links leídos de  las rutas absolutas que se encontraron dentro de un directorio(solo archivos .md);
        arrLinks = objFn.obtainLinksOfFileOrDirectory(absolulteRoute);
      }
    }
    // Array del arreglo con los links
    // Options (validate)
    // Validate Sí: Validar cada links por medio de peticiones HTTP ->> href, text, file, status, Ok
    // Validate No: retorna href, text, file
     if (arrLinks.length === 0) {
      reject(new Error ("Este archivo no contiene links"));
    } else {
      if (options.validate === true) {
        objFn.checkLinks(arrLinks).then((response) => {
          resolve(response);
        });
      } else {
        //console.log('Estoy aquí')
        resolve(arrLinks);
      }
    } 
  });
  return promise;
};
//mdLinks('./tools/', {validate : true}).then(console.log);
// mdLinks('./tools/tool.md', {validate : true}).then(console.log); ruta relativa con un archivo
// mdLinks("./tools/", {validate : true}).then(console.log); ruta relativa con directorios
// mdLinks('./tools/check/cosmopolitan.txt', {validate :true}).then(console.log)

module.exports = {
  mdLinks,
};