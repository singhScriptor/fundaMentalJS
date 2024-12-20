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

// function declaration

greeting('Namaste India') //this will display the output cause function declaration will be called first
function greeting(message){
    console.log(message)
}

//function expression

greet("namaste india") //this will work as a varibale and greet will be undefined at this point
var greet = function(message){
    console.log(message)
}
