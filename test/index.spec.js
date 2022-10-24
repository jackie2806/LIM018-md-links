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
   it('Should return a message: the file does not have any links', () => {
    return objFn.mdLinks('./tools/tooling.md', {validate: false})
        .catch((error) => {
            expect(error.message).toBe('Este archivo no contiene links');
        })
   });

    it('Should return an array with paths', () => {
    const arrOfPaths = [
        {
          href: 'https://nodejs.org/es/',
          text: 'Node',
          file: 'D:\\Lab\\LIM018-md-links\\tools\\tools-files\\letters\\words.md'
        },
        {
          href: 'https://es.wikipedia.org/wiki/Markdown',
          text: 'Markdown',
          file: 'D:\\Lab\\LIM018-md-links\\tools\\tools-files\\letters\\words.md'
        }
      ];
    return objFn.mdLinks('./tools/tools-files', {validate:false})
    .then((response) => {
        expect(response).toEqual(arrOfPaths);
        
    })
   }); 

  it('Should return an array of links if the path is absolute', () => {
        const arrLinksObj = [
            {
              href: 'https://nodejs.org/es/',
              text: 'Node',
              file: 'D:\\Lab\\LIM018-md-links\\tools\\tools-files\\letters\\words.md'
            },
            {
              href: 'https://es.wikipedia.org/wiki/Markdown',
              text: 'Markdown',
              file: 'D:\\Lab\\LIM018-md-links\\tools\\tools-files\\letters\\words.md'
            }
          ];
          return objFn.mdLinks('D:\\Lab\\LIM018-md-links\\tools\\tools-files', {validate:false})
            .then((response) => {
                expect(response).toEqual(arrLinksObj);
                
            })
   }); 

     it('Should return a promise array  of links validated', (done) => {
    const promiseArr = [
        {
          href: 'https://nodejs.org/es/',
          text: 'Node',
          file: 'D:\\Lab\\LIM018-md-links\\tools\\tools-files\\letters\\words.md',
          status: 200,
          message: 'OK'
        },
        {
          href: 'https://es.wikipedia.org/wiki/Markdown',
          text: 'Markdown',
          file: 'D:\\Lab\\LIM018-md-links\\tools\\tools-files\\letters\\words.md',
          status: 200,
          message: 'OK'
        }
      ];

      const obj3 = {
        status: 200,
        statusText: 'OK'      
      }
      fetch.mockResolvedValueOnce(obj3);
      fetch.mockResolvedValueOnce(obj3); 
      //fetch.mockResolvedValueOnce({status: 200, message: 'ok'});
// mock
      //console.log('hola', mdLinks('./tools/tools-files', {validate : true}).then(console.log))
      objFn.mdLinks('./tools/tools-files',{validate:true})
        .then((response) => {        
            expect(response).toEqual(promiseArr);
            done();
            
        }); 
    
   });    

  /*  test('Should return a promise array  of links validated', async () => {
    const promiseArr = [
        {
          href: 'https://nodejs.org/es/',
          text: 'Node',
          file: 'D:\\Lab\\LIM018-md-links\\tools\\tools-files\\letters\\words.md',
          status: 200,
          message: 'OK'
        },
        {
          href: 'https://es.wikipedia.org/wiki/Markdown',
          text: 'Markdown',
          file: 'D:\\Lab\\LIM018-md-links\\tools\\tools-files\\letters\\words.md',
          status: 200,
          message: 'OK'
        }
      ];
    const data = await objFn.mdLinks('./tools/tools-files', {validate : true});
    expect(data).toBe(promiseArr);
  }); */
  
  
  

    
})
