var fs = require('fs');

// Example of Synchronization
// var read = fs.readFileSync('read.txt','utf8');
// console.log(read);
// fs.writeFileSync('write.txt',read);
//code below will be executed ***after the file operation is complete


// Example of Asynchronization
// var read =
fs.readFile('read.txt', 'utf8', function(err, data){
  // console.log(data);
  fs.writeFile('write.txt',data, function(){});
});
//code below this block will be executed ***while the file operation is complete

// console.log('Because of Asynchronization It will Print First!!');
