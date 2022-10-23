const objFn = require('../src/index.js');
jest.mock('node-fetch');
const fetch = require('node-fetch');

describe('mdLinks function', () => {
    it('Is a function', () => {
        expect(typeof objFn.mdLinks).toBe('function');
    });

   it('Should return the path is not exist', () => {
        return objFn.mdLinks('./tools/reading.word', {validate:false})
        .catch((error) => {
            expect(error.message).toBe('La ruta no existe, ingrese una ruta válida')
        });
   });

   it('Should return a message: the path does not have a file with .md extension', () => {
    return objFn.mdLinks('./tools/reading.txt', {validate: false})
        .catch((error) => {
            expect(error.message).toBe('No es un archivo .md')
        })
   });
   it('Should return a message: the file does not have links', () => {
    return objFn.mdLinks('./tools/tooling.md', {validate: false})
        .catch((error) => {
            expect(error.message).toBe('Este archivo no contiene links');
        })
   })
    
})
