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

   it
    
})
