// module.exports.hello=function(){return 'hello'}
// module.exports.bye=function(){return 'bye'}

var Qux = function () {};
    Qux.prototype.log = function () {
      console.log('baz!');
    };
    exports.Qux = Qux;
// var Doo = function () {};
//     Doo.prototype.log = function () {
//         console.log('doo!');
//     }
//     module.exports = Doo;

// var Baz = function () {};
//     Baz.prototype.log = function () {
//       console.log('baz!');
//     };

//     exports.Baz = new Baz();

// var Buz = function () {};
//     Buz.prototype.log = function () {
//       console.log('buz!');
//     };
//     module.exports = new Buz();

// exports.fiz = function () {
//       console.log('fiz!');
//     }

// module.exports = function () {
//       console.log('bar!');
//     }
 
// foo = function () {
//       console.log('foo!');
//     }
