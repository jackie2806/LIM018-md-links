// buscar en internet los formatos mdlinks
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