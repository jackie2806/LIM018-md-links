//const { checkLinks } = require('./small-functions.js');
const fn = require('../src/small-functions.js');

const mdLinks = (route, options) => {
  const promise =  new Promise((resolve, reject) => {
      // Verifica si la ruta existe
    if(!fn.verifyRoute(route)){
      reject(new Error('La ruta no existe, ingrese una ruta válida'));
    } 
    // ¿Es una ruta absoluta?

  })    
  return promise;
}


  //mdLinks('./tools/', false).then(console.log)
mdLinks('./tools/reading.word', false).then(console.log)

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