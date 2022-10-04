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
