const objFn = require('../src/index.js');
jest.mock('node-fetch');
const fetch = require('node-fetch');

describe('mdLinks function', () => {
    it('It is a function', () => {
        expect(typeof objFn.mdLinks).toBe('function');
    });

    
    
})