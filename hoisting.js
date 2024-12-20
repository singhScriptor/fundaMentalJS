// HOISTING :
/* 
hoisting is a method where variable and function declaration will be called first before the execution of the code

*/

//example 1

//variable

//global variable
console.log(a); //undefined
var a = 10;

//block scope variable
console.log(b) // this will give reference error
let b = 20;

console.log(c) // this will give reference error
const c=30;

