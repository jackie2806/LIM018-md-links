//const { checkLinks } = require('./small-functions.js');
const objFn = require("../src/small-functions.js");

const mdLinks = (route, options) => {
  console.log('route', route)
  const promise = new Promise((resolve, reject) => {
    // Verifica si la ruta existe
    if (!objFn.verifyRoute(route)) {
      reject(new Error("La ruta no existe, ingrese una ruta válida"));
    } 

    let arrLinks = [];
    //console.log(arrLinks);
    // ¿Es una ruta absoluta?
    const absolulteRoute = objFn.verifyAbsoluteRoute(route);
    //console.log(absolulteRoute)
    // Verifico si se trata de un archivo o de un directorio
    const arrAbsoluteRoute = objFn.verifyDirectoryOrFile(absolulteRoute); //Devuelvo un array con
    console.log("Array Rutas", arrAbsoluteRoute);
    // console.log(typeof arrAbsoluteRoute)
      // verificar si cada elemento del array de rutas absolutas es un archivo .md
      console.log('Antes del if', arrAbsoluteRoute.length)
    if (arrAbsoluteRoute.length === 1) {
        // Array que solo tiene un elemento, que es una ruta absoluta con un file
     if (objFn.verifyExtensionMd(arrAbsoluteRoute[0])) {
          console.log('hola', arrAbsoluteRoute[0]);
          console.log('Aquí', absolulteRoute[0].length)  
          arrLinks = objFn.obtainLinksOfFileOrDirectory(arrAbsoluteRoute[0]);
          //console.log("soy", arrLinks);
        } else {
          reject(new Error("No es un archivo .md"));
        }
      } 
      console.log('Aquí estoy', arrAbsoluteRoute.length)   
        //varias rutas absolutas con diferentes tipos de archivos
    if(arrAbsoluteRoute.length > 1) {
            
        arrLinks = objFn.obtainLinksOfFileOrDirectory(arrAbsoluteRoute);
      } 
           
      // Array del arreglo con los links
      // Options (validate)
      // Validate Sí: Validar cada links por medio de peticiones HTTP ->> href, text, file, status, Ok
      // Validate No: retorna href, text, file
   if (arrLinks.length === 0) {
        reject(new Error("Este archivo no contiene links"));
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
//mdLinks('./tools/tool.md', {validate : true}).then(console.log);
//mdLinks('./tools/tools-files', {validate : true}).then(console.log)
//mdLinks('D:\\Lab\\LIM018-md-links\\tools\\tools-files', {validate:false}).then(console.log)


module.exports = {
  mdLinks,
};
