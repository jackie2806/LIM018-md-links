//const { checkLinks } = require('./small-functions.js');
const fn = require('../src/small-functions.js');

const mdLinks = (route, options) => {
  const promise =  new Promise((resolve, reject) => {
    let arrLinks = [];
    // console.log(arrLinks);
      // Verifica si la ruta existe
    if(!fn.verifyRoute(route)){
      reject(new Error('La ruta no existe, ingrese una ruta válida'));
    } 
    // ¿Es una ruta absoluta?
    const absolulteRoute = fn.verifyAbsoluteRoute(route);
    // Verifico si se trata de un archivo o de un directorio
    const arrAbsoluteRoute = fn. verifyDirectoryOrFile(absolulteRoute); //Devuelvo un array con 
    // console.log('Array Rutas', arrAbsoluteRoute)
    // console.log(typeof arrAbsoluteRoute)
    if(arrAbsoluteRoute.length > 0){      
      // verificar si cada elemento del array de rutas absolutas es un archivo .md
           
      if(arrAbsoluteRoute.length === 1){
        
         // Array que solo tiene un elemento, que es una ruta absoluta con un file
        if(fn.verifyExtensionMd(arrAbsoluteRoute[0])){
             arrLinks = fn.readFileWithExtensionMd(arrAbsoluteRoute[0]);
        } else {
          'No es un archivo .md'
        }
      } else {
        // Array con links leídos de  las rutas absolutas que se encontraron dentro de un directorio(solo archivos .md);
        arrLinks = fn.obtainLinks(absolulteRoute);        

      }
    

  }
})   
  return promise;
  
}


mdLinks('./tools/', false).then(console.log)
//mdLinks('./tools/reading.word', false).then(console.log) ruta no existe

 // ¿Es una ruta absoluta? ---> absoluteRoute verifica ello y si la ruta no es absoluta, pues la convierte a una ruta absoluta
/*  const absoluteRoute = fn.verifyAbsoluteRoute(route);
 //console.log('AbsoluteRoute', absoluteRoute);
      
    // ¿Es un directorio? Leer el contenido del directorio
 const checkDirectory = fn.verifyDirectoryOrFile(absoluteRoute);
 let arrLinks =  fn.obtainLinks(absoluteRoute);  
    if(checkDirectory.length > 1){
  
   } else {
     // ¿Es un archivo md.
     console.log('checkito', checkDirectory)
     const checkExtesionMd = fn.verifyExtensionMd(absoluteRoute);
     console.log('hola', checkExtesionMd);
       if(checkExtesionMd){
         
         arrLinks = readFileWithExtensionMd(absoluteRoute);
       } else {
         //reject('No es un archivo .md');
         console.log('No es un archivo .md')
       }
   }
    // ¿El archivo tiene links?
   if(arrLinks === ''){
     reject('Este archivo no contiene links');
   } else {
         // Array del arreglo con los links
         // Options (validate)
         // Validate Sí: Validar cada links por medio de peticiones HTTP ->> href, text, file, status, Ok
         // Validate No: retorna href, text, file 
         if(options.validate === true){
           checkLinks(arrLinks)
             .then((response) => {
               resolve(response);
             });
         } else {
           resolve(arrLinks);
         }
          


};  */