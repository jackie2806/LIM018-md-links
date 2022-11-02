#!/usr/bin/env node
const objFnAxuliary = require("../src/small-functions.js");
const objFnPrincipal = require('../src/index.js');

//const [,, ...args] = process.argv
//console.log(`Hello World ${args}`) 

const process = require('process');
const args = process.argv.slice(2);
 // por defecto ruta raiz del C:\Program Files\nodejs\node.exe,D:\Lab\LIM018-md-links\src\cli.js
/* const [,, ...args] = process.argv
console.log(`Hello World ${args}`); */
const path = require('path')
/* console.log('id del proceso', process.pid);
console.log('título del proceso: ', process.title);
console.log('versión de node: ', process.version);
console.log('sistema operativo: ', process.platform); */

//console.log(process.argv.slice(2));

switch(args.length){
    case 0: 
    console.log('Ingrese una ruta');
    break;
    case 1: 
    objFnPrincipal.mdLinks(args[0], {validate:false})
        .then((links) => {
            links.forEach((link) => {
                console.log(link.file, link.href, link.message)
            });
        })
        .catch((error) => {
            console.log('Error, verifique los datos ingresados')
        })
    break;
    case 2:
        if(args[1] === '--validate'){
            objFnPrincipal.mdLinks(args[0], {validate:true})
                .then((links) => {
                    links.forEach((link) => {
                        console.log(link.href, link.status, link.message)
                    })
                })
                .catch((error) => {
                    console.log('Un error, vuelva a intentarlo');
                })
        } else if (args[1] === '--stats'){
            objFnPrincipal.mdLinks(args[0], {validate: true})
                .then((resolve) => {
                    //variable de mi estadística
                    console.log(`Total : ${objFnAxuliary.totalStats(resolve)}`)
                    console.log(`Unique : ${objFnAxuliary.uniqueStats(resolve)}`)
                });
        }
        break;
    case 3: 
    if (
        (arguments[1] === "--validate" && arguments[2] === "--stats") ||
        (arguments[1] === "--stats" && arguments[2] === "--validate")
      ){
        mdLinks(arguments[0], { validate: true })
        .then((resolve) => {
          //variable para traer a funciones stats
           console.log(`Total : ${objFnAxuliary.totalStats(resolve)}`);
           console.log(`Unique : ${objFnAxuliary.uniqueStats(resolve)}`);
           console.log(`Broken : ${objFnAxuliary.brokenStats(resolve)}`);
        })
        .catch((error) =>{
          console.log('ha ocurrido un error')
        });  
      };   
}




