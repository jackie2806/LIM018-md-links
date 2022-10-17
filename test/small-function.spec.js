const fn = require('../src/small-functions.js');
// const { verifyRoute, typeRoute } = require('../src/index.js');
/* const verifyRoute = require('../src/index.js');
const typeRoute = require('../src/index.js'); */
//jest.mock('node-fetch');
// ------ TEST 1
describe('Function that verify if the route exists', () => {
  it('Should be a function', () => {
    expect(typeof fn.verifyRoute).toBe('function');
      //expect(typeof verifyRoute).toBe('function');
  });
  it('Should verify if the route exists', () => {
    const route = './tools/reading.txt';
    expect(fn.verifyRoute(route)).toBe(true);
  })
 
});

// ----- TEST 2

describe('Function that verify if the route is absolute', () => {
  it('Should be a function', () => {
    expect(typeof fn.verifyAbsoluteRoute).toBe('function');    
  });
  it('Should verify if the route is absolute', () => {
    const route = 'D:\\Lab\\LIM018-md-links\\tools\\reading.word';
    expect(fn.verifyAbsoluteRoute(route)).toBe(true);
  })
});

// ----- TEST 3

describe('Function that verify if the if the route contains a file', () => {
  it('Should be a function', () => {
    expect(typeof fn.verifyExtensionMd).toBe('function');
  });
  it('Should verify if the route has a file and shows it', () => {
    const route = 'D:\\Lab\\LIM018-md-links\\tools\\reading.word';
   // const path = require('path');
    console.log(fn.verifyExtensionMd(route));
    expect(fn.verifyExtensionMd(route)).toBe(false);
  })
})


// ----- TEST 4


// ----- TEST 5



// ----- TEST 6



// ----- TEST 7

