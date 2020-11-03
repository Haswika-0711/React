var http=require('http')
var assert = require('assert')
var calc = require('../JS/calc.js')
var server=require('../server.js')
var should=require('chai').should()

var foo='bar'
var beverages = { tea : ['chai','mocha','oolong']};

describe('test foo',() => {
    it('/',() =>{
        foo.should.be.a('string');
        foo.should.equal('bar');
        foo.should.have.length(3);
        beverages.should.have.property('tea').with.length(3);
    })
})



// describe('HTTP server test', () => {
// before(function(){
//     server.listen(5555)
// });

// describe('/', () => {
//     it('should display hello react', () => {
//         http.get('http://localhost:5555',function(response){
//             assert.equal(response.statusCode, 200)
//         })
//     });

//     it('should return body message', () => {
//         http.get('http://localhost:5555',function(response){
//             var body='';
//             response.on('data',function(d){
//                 body +=d
//                 console.log(body)
//             })

//             response.on('end',function(){
//                 assert.equal(body, 'Hello React')
//             })
//         })
//     });
// });

// after(function() {
//     server.close();
// })
// });

// describe.only('Array Execution', () => {
//     before(function() {
//         console.log('runs before all tests in this block')
//     });

//     after(function() {
//         console.log('runs after all tests in this block');
//     });

//     beforeEach(function() {
//         console.log('runs before each test in this block');
//     });

//     afterEach(function() {
//         console.log('runs after each test in this block');
//     });

//     it('#indexOf()', () => {
//         assert.equal([1, 2, 3].indexOf(4), -1);
//     });

//     it('#returns 10+20', () => {
//         assert.equal(calc.add(10, 20), 30)
//     });


//     it.skip('#returns 10*2', () => {
//         assert.equal(calc.mul(10, 2), 20)
//     });

// });



