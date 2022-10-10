const fn = require('../src/small-functions.js');
// const { verifyRoute, typeRoute } = require('../src/index.js');
/* const verifyRoute = require('../src/index.js');
const typeRoute = require('../src/index.js'); */
// ------ TEST 1
describe('Function that verify if the route exists', () => {
  it('Should be a function', () => {
    expect(typeof fn.verifyRoute).toBe('function');
      //expect(typeof verifyRoute).toBe('function');
  });
  it('Should verify if the route exists', () => {
    const route = './tools/reading.word';
    expect(fn.verifyRoute(route)).toBe(true);
  })
 
});

// ----- TEST 2

describe('Function that verify if the route is absolute', () => {
  it('Should be a function', () => {
    expect(typeof fn.typeRoute).toBe('function');    
  });
  it('Should verify if the route is absolute', () => {
    const route = 'D:\\Lab\\LIM018-md-links\\tools\\reading.word';
    expect(fn.typeRoute(route)).toBe(true);
  })
});

// ----- TEST 3

describe('Function that verify if the if the route contains a file', () => {
  it('Should be a function', () => {
    expect(typeof fn.verifyTypeOfExtension).toBe('function');
  });
  it('Should verify if the route has a file and shows it', () => {
    const route = 'D:\\Lab\\LIM018-md-links\\tools\\reading.word';
   // const path = require('path');
    console.log(fn.verifyTypeOfExtension(route));
    expect(fn.verifyTypeOfExtension(route)).toBe(false);
  })
})



