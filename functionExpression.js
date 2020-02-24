// Normal Function
function sayHi(){
  console.log('Hallo');
}
sayHi();

var sayBye = function(){
  console.log('Aufwidersen');
}
sayBye();

function callFunction(fun){
  fun();
}
var callMe = function(){
  console.log('CallMe Called!!');
}
callFunction(callMe);
