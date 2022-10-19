//const { checkLinks } = require('./small-functions.js');
const fn = require('../src/small-functions.js');

const mdLinks = (route, options) => {
  const promise =  new Promise((resolve, reject) => {
      // Verifica si la ruta existe
    if(!fn.verifyRoute(route)){
      reject(new Error('La ruta no existe, ingrese una ruta válida'));
    } else {
       // ¿Es una ruta absoluta? ---> absoluteRoute verifica ello y si la ruta no es absoluta, pues la convierte a una ruta absoluta
      const absoluteRoute = fn.verifyAbsoluteRoute(route);
      //console.log('AbsoluteRoute', absoluteRoute);
      let arrLinks = [];
      
         // ¿Es un directorio? Leer el contenido del directorio
      const checkDirectory = fn.verifyDirectoryOrFile(absoluteRoute);
      console.log('check directory', checkDirectory, 'h');
        let arrPaths = []; //rutas extensión .md
         if(checkDirectory.length > 1){
          //console.log('Línea 18',checkDirectory);
          let arrVerify = fn.verifyDirectoryOrFile(absoluteRoute);
        
           arrPaths.push(arrVerify.filter((e) => {
            return fn.verifyExtensionMd(e);
           }))
           //console.log('arrQuevale', arrPaths[0]);
           arrPaths = arrPaths[0]; // La magia
           //console.log(arrPaths) 
          // Recorrer arrPaths
          let arrPrueba = [];
          const newArr = arrPaths.map((e) => {
            if(e.length > 0){
              console.log('Soy un elemento', e); 
              return e;
            }
         
          }).flat();
          newArr.forEach((e) => {
            
            arrLinks.push(fn.readFileWithExtensionMd(e));
            //console.log('mesaje', fn.readFileWithExtensionMd(e));
          });
         
        
          console.log('NuevoARR',arrLinks)
          //console.log('soy ArrLinks', arrLinks);  
          //console.log('me', arrPrueba)
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
        }        
    }   
    
  }); 
  return promise;
}


  mdLinks('./tools/', false).then(console.log)
