// console.log("Tajul");
//###01 setTimeout
// setTimeout(function(){
//   console.log("Tajul 3 sec passed");
// }, 3000);

//###02 setInterval
// var time = 0;
// setInterval (function(){
//   time += 1;
//   console.log(time +"second passed");
// }, 1000)

//###setInterval with condition
// var time = 0;
// var timer = setInterval(function(){
//   time +=2;
//   if(time>5)
//   {
//     clearInterval(timer);
//   }
//   else {
//     console.log(time +"sec passed");
//   }
// },2000);

//##03 Access the directory i am inspect in
console.log(__dirname);
console.log(__filename);
