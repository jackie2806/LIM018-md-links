//const { checkLinks } = require('./small-functions.js');
const objFn = require("../src/small-functions.js");

const mdLinks = (route, options) => {
  console.log('route', route)
  const promise = new Promise((resolve, reject) => {
    // Verifica si la ruta existe
    if (!objFn.verifyRoute(route)) {
      reject(new Error("La ruta no existe, ingrese una ruta válida"));
    } 
    const absolulteRoute = objFn.verifyAbsoluteRoute(route);
    const arrLinks = objFn.obtainLinksOfFileOrDirectory(absolulteRoute);
   
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
