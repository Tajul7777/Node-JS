var fs = require('fs');

// fs.mkdirSync('Makedirectory');

// fs.rmdirSync('RemoveDirevtory');

// fs.mkdir('Makedirectory',function(){
//   fs.readFile('read.txt', 'utf8', function(err, data){
//     fs.writeFile('./Makedirectory/writeHere.txt', data, function(){
//
//     });
//   });
// });
fs.mkdir('Makedirectory',function(){
  fs.readFile('read.txt', 'utf8', function(err, data){
    fs.writeFile('./Makedirectory/writeHere.txt', data, function(){

    });
  });
});

fs.unlink('./Makedirectory/writeHere.txt', function(){
  fs.rmdir('Makedirectory', function(){
    
  });
});
