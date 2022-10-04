const { verifyRoute }  = require('../src/index.js');
console.log(verifyRoute);
describe('Verify if the route exists', () => {
  it('Should verify the path', () => {
    expect(typeof verifyRoute).toBe('function');
  });
})

/* 
describe('mdLinks', () => {

  it('should...', () => {
    console.log('FIX ME!');
  });

});

describe('verifyRoute', () => {
  it('Shoud verify the route', () => {
    //expect función 
  })
}) */