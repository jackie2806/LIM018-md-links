// buscar en internet los formatos mdlinks

Tachito de basura de mis funciones 
<!-- if (arrAbsoluteRoute.length === 1) {
        if (objFn.verifyExtensionMd(arrAbsoluteRoute)) {
          arrLinks = objFn.readFileWithExtensionMd(absolulteRoute);
        } else {
          reject(new Error("No es un archivo .md"));
        }
      } -->
      <!-- Modificación para leer archivos

      const verifyDirectoryOrFile = (absolutePath) => {

  if (Array.isArray(absolutePath)) {
    const fileNames = fs.readdirSync(absolutePath);
    const arrFileNames = fileNames.map((file) => verifyDirectoryOrFile(path.join(absolutePath,file))).flat(); 
    return arrFileNames; 
  } 
  const verifyFile = (absolutePath) => fs.statSync(absolutePath).isFile();

  if (verifyFile) {
    return [absolutePath];
  }

  return []
 
}
console.log(verifyDirectoryOrFile('D:/Lab/LIM018-md-links/tools'))
console.log(verifyDirectoryOrFile('D:\\Lab\\LIM018-md-links\\tools\\reading.txt')) -->
// lógica más enrredada ---> se simplificó haciendo uso de la lógica

/*  let arrLinks = [];
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
      }  */
           
      // Array del arreglo con los links
      // Options (validate)
      // Validate Sí: Validar cada links por medio de peticiones HTTP ->> href, text, file, status, Ok
      // Validate No: retorna href, text, file