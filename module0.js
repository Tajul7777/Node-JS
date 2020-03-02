
var counter = function(arr){
  return 'There are '+arr.length+' elements in the array';
};
// module.exports.counter = function(arr){
//   return 'There are '+arr.length+' elements in the array';
// };
var adder = function(a,b){
  return `The sum of the two number is ${a+b}`;
};
// module.exports.adder  = function(a,b){
//   return `The sum of the two number is ${a+b}`;
// };

var pi = 3.1416;
// module.exports.pi = 3.1416;

// module.exports.counter = counter;
// module.exports.adder = adder;
// module.exports.pi = pi;

module.exports = {
  counter: counter,
  adder: adder,
  pi: pi

}
