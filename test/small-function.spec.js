const objFn = require('../src/small-functions.js');
// const { verifyRoute, typeRoute } = require('../src/index.js');
/* const verifyRoute = require('../src/index.js');
const typeRoute = require('../src/index.js'); */
jest.mock('node-fetch');
const fetch = require('node-fetch');
// ------ TEST 1
describe('Function verifies if the route exists', () => {
  it('Should be a function', () => {
    expect(typeof objFn.verifyRoute).toBe('function');
      //expect(typeof verifyRoute).toBe('function');
  });
  it('Should verify if the route exists', () => {
    expect(objFn.verifyRoute('./tools/reading.txt')).toBe(true);
    expect(objFn.verifyRoute('./tools/readin.txt')).toBe(undefined);
  })
 
});

// ----- TEST 2

describe('Function verifies if the route is absolute', () => {
  it('Should be a function', () => {
    expect(typeof objFn.verifyAbsoluteRoute).toBe('function');    
  });
  it('Should verify if the route is absolute', () => {
    const route = 'D:\\Lab\\LIM018-md-links\\tools\\reading.word';
    expect(objFn.verifyAbsoluteRoute(route)).toBe(true);
    expect(objFn.verifyAbsoluteRoute('./tools/reading.word')).toEqual(route);
  })
});

// ----- TEST 3
describe('Function verifies if the route is a directory or a file', () => {
  it('Should be a function', () => {
    expect(typeof objFn.verifyDirectoryOrFile).toBe('function');
  });
  it('Should search file paths in a directory path and return them in an array', () => {
    const arrFiles =  [
      'D:\\Lab\\LIM018-md-links\\tools\\reading.txt',
      'D:\\Lab\\LIM018-md-links\\tools\\texting.txt',
      'D:\\Lab\\LIM018-md-links\\tools\\tool.md',
      'D:\\Lab\\LIM018-md-links\\tools\\tooling.md',
      'D:\\Lab\\LIM018-md-links\\tools\\tools-files\\letters\\words.md'
    ];
    expect(objFn.verifyDirectoryOrFile('D:/Lab/LIM018-md-links/tools')).toEqual(arrFiles);
    expect(objFn.verifyDirectoryOrFile('D:\\Lab\\LIM018-md-links\\tools\\reading.txt')).toEqual(['D:\\Lab\\LIM018-md-links\\tools\\reading.txt'])
  });
})

// ----- TEST 4

describe('Function verifies if the route contains a file with .md extension', () => {
  it('Should be a function', () => {
    expect(typeof objFn.verifyExtensionMd).toBe('function');
  });
  it('Should verify if the route has a file and shows it', () => {
    const route = 'D:\\Lab\\LIM018-md-links\\tools\\reading.word';
   // const path = require('path');
   // console.log(fn.verifyExtensionMd(route));
    expect(objFn.verifyExtensionMd('D:\\Lab\\LIM018-md-links\\tools\\tool.md')).toBe(true);
    expect(objFn.verifyExtensionMd(route)).toBe(false);
  })
})

// ----- TEST 5
describe('Function extracts the content of file with .md extension and looks for links', () => {
  it('Should be a function', () => {
    expect(typeof objFn.readFileWithExtensionMd).toBe('function');
  })
  it('Should return an array with href, text and file about links inside file with .md extension', () => {
    const arrLinks = [
      {
        href: 'https://www.geeksforgeeks.org/node-js-fs-readfilesync-method/?id=discuss',
        text: 'Node',
        file: 'D:\\Lab\\LIM018-md-links\\tools\\tool.md'
      },
      {
        href: 'https://es.wikipedia.org/wiki/Markdown',
        text: 'Markdown',
        file: 'D:\\Lab\\LIM018-md-links\\tools\\tool.md'
      }
    ];
    expect(objFn.readFileWithExtensionMd('D:\\Lab\\LIM018-md-links\\tools\\tool.md')).toEqual(arrLinks);
  })
})

// ----- TEST 6
describe('Function obtains the all links after reading each file with .md extension', () =>{
  it('Should be a function', () => {
    expect(typeof objFn.obtainLinks).toBe('function');
  });
  it('Should return all links after reading each file with .md extension', () =>{
    const arrCheck0 = [
      {
        href: 'https://www.geeksforgeeks.org/node-js-fs-readfilesync-method/?id=discuss',
        text: 'Node',
        file: 'D:\\Lab\\LIM018-md-links\\tools\\tool.md'
      },
      {
        href: 'https://es.wikipedia.org/wiki/Markdown',
        text: 'Markdown',
        file: 'D:\\Lab\\LIM018-md-links\\tools\\tool.md'
      }
    ];
    expect(objFn.obtainLinks('D:\\Lab\\LIM018-md-links\\tools\\tool.md')).toEqual(arrCheck0);
  })
})


// ----- TEST 7
describe('Function checks if the links are broken', () => {
  it('Should be a function', () => {
    expect(typeof objFn.checkLinks).toBe('function');
  });
  it('Should return a promise: an array with objects with status: 200 and message: OK', () => {
    const arrCheck1 = [
   
      {
        href: 'https://es.wikipedia.org/wiki/Markdown',
        text: 'Markdown',
        file: 'D:/Lab/LIM018-md-links/tools/tool.md',
        status: 200,
        message: 'OK'
      }
    ];
    const obj1 = {
      status: 200,
      message: 'OK',      
    }
    fetch.mockResolvedValue(obj1);

    return objFn.checkLinks(arrCheck1)
      .then((response) => {
        expect(response).toEqual(arrCheck1)
    });
  });

  it('Should return a promise: an array with objects with status: Error and message: Fail', () => {
    const arrCheck2 = [
   
      {
        href: 'https://nodejs.or/es/',
        text: 'Node',
        file: 'D:/Lab/LIM018-md-links/tools/tool.md',
        status: 'Error',
        message: 'Fail'
      },
        
      
    ];
    const obj2 = {
      status: 'Error',
      message: 'Fail',      
    }
    fetch.mockResolvedValue(obj2);
    return objFn.checkLinks(arrCheck2)
        .then((response) => {
          expect(response).toEqual(arrCheck2)
        });
  });
  it('Should be an error with link is not posible to find', () => {
    const arrCheck3 = [
      {
        href: 'https://www.geeksforgeeks.o/node-js-fs-readfilesync-method/?id=discuss',
        text: 'Node',
        file: 'D:\\Lab\\LIM018-md-links\\tools\\tool.md',
        status: 'Error',
        message: 'Fail'
      }
    ];
    const obj3 = {
      status : 'Error',
      message : 'Fail'
    }
    fetch.mockResolvedValue(obj3);
    return objFn.checkLinks(arrCheck3)
      .then((response) => {
        expect(response).toEqual(arrCheck3);
      })    
  })
  
});


// ----- TEST 8 (3)

describe('Function gets the total of stats', () => {
  it('Should be a function', () => {
    expect(typeof objFn.totalStats).toBe('function');
  });
  it('Should return a total of stats', () => {
    const arrOfLinks1 = [ {
      href: 'https://nodejs.or/es/',
      text: 'Node',
      file: 'D:/Lab/LIM018-md-links/tools/tool.md',
      status: '',
      message: 'Fail'
    },
    {
      href: 'https://nodejs.org/es/',
      text: 'Node',
      file: 'D:/Lab/LIM018-md-links/tools/tool.md',
      status: '',
      ok: 'Fail'
    },
    {
      href: 'https://es.wikipedia.org/wiki/Markdown',
      text: 'Markdown',
      file: 'D:/Lab/LIM018-md-links/tools/tool.md',
      status: 200,
      message: 'OK'
    }
      
    ];
    expect(objFn.totalStats(arrOfLinks1)).toEqual(3);
  });

});

describe('Function gets broken stats', () => {
  it('Should be a function', () => {
    expect(typeof objFn.brokenStats).toBe('function');
  });
  it('Should return broken stats', () => {
    const arrOfLinks2 = [ {
      href: 'https://nodejs.or/es/',
      text: 'Node',
      file: 'D:/Lab/LIM018-md-links/tools/tool.md',
      status: '',
      message: 'Fail'
    },
    {
      href: 'https://nodejs.org/es/',
      text: 'Node',
      file: 'D:/Lab/LIM018-md-links/tools/tool.md',
      status: '',
      ok: 'Fail'
    },
    {
      href: 'https://es.wikipedia.org/wiki/Markdown',
      text: 'Markdown',
      file: 'D:/Lab/LIM018-md-links/tools/tool.md',
      status: 200,
      message: 'OK'
    }
      
    ];
    expect(objFn.brokenStats(arrOfLinks2)).toEqual(1);
  });
});

describe('Function gets unique stats', () => {
  it('Should be a function', () => {
    expect(typeof objFn.uniqueStats).toBe('function');
  });
  it('Should return unique stats', () => {
    const arrOfLinks3 =  [{
      href: 'https://nodejs.org/es/',
      text: 'Node',
      file: 'D:/Lab/LIM018-md-links/tools/tool.md'
    },
    {
      href: 'https://es.wikipedia.org/wiki/Markdown',
      text: 'Markdown',
      file: 'D:/Lab/LIM018-md-links/tools/tool.md'
    }];

    expect(objFn.uniqueStats(arrOfLinks3)).toEqual(2);
  })
})


