// Normal Function
function sayHi(){
  console.log('Hallo');
}
sayHi();

// Function Expression
var sayBye = function(){
  console.log('Aufwidersen');
}
sayBye();

//Function Calling with parameter
function callFunction(fun){
  fun();
}
var callMe = function(){
  console.log('CallMe Called!!');
}
callFunction(callMe);
