var events = require('events');
var util = require('util');

var Person = function(name){
  this.name = name;
};

util.inherits(Person, events.EventEmitter);

var Katrina = new Person('Katrina');
var Parvaz = new Person('Parvaz');
var Tajul = new Person('Tajul');
var Couple = [Katrina, Parvaz, Tajul];

Couple.forEach(function(couplesFunction){
  couplesFunction.on('speak', function(mssg){
    console.log(couplesFunction.name+'said: '+mssg);
  });
});

Katrina.emit('speak', 'I love Parvaz');
