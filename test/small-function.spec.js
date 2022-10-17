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
    expect(fn.verifyRoute('./tools/reading.txt')).toBe(true);
    expect(fn.verifyRoute('./tools/readin.txt')).toBe(undefined);
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
    expect(fn.verifyAbsoluteRoute('./tools/reading.word')).toEqual(route);
  })
});

// ----- TEST 3
describe('Function that verify if it is a directory or file', () => {
  it('Should be a function', () => {
    expect(typeof fn.verifyDirectoryOrFile).toBe('function');
  });
  it('Should be search files in a directory', () => {
    const arr =  [
      'D:\\Lab\\LIM018-md-links\\tools\\reading.txt',
      'D:\\Lab\\LIM018-md-links\\tools\\texting.txt',
      'D:\\Lab\\LIM018-md-links\\tools\\tool.md',
      'D:\\Lab\\LIM018-md-links\\tools\\tooling.md',
      'D:\\Lab\\LIM018-md-links\\tools\\tools-files\\letters\\words.md'
    ];
    expect(fn.verifyDirectoryOrFile('D:/Lab/LIM018-md-links/tools')).toEqual(arr);
  });
})



// ----- TEST 4

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


// ----- TEST 5



// ----- TEST 6



// ----- TEST 7

