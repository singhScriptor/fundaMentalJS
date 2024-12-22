// var a='Hey there!'
// {
//     var a='Hello world' //even in block scope var is global scope so it reassign the value.
// }
// console.log(a) //this will throw an error cause let is block scope variable and it is not accessible from outside of block.


// /* what if you use let or const outside of block scope and inside the block scope with same name? */
// let b='Hey there!'
// {
//     let b='Hello world' //it will not reassign the value of b cause let is block scope variable.
// }
// console.log(b)

// /* 
// now what if a reassign the value of global variable with same name in block scope? 
// */

// let c='Hey there!'
// {
//     let c='Hello world' //it will not print anything because it is not accessible from outside of block.
// }
// console.log(c) 


// // Shadowing:
// let d='Hey there!'
// {
//     d='Hello world' //this is a shadow of outer variable
//     console.log(d)
// }
// console.log(d)


var a = 50;



function fun(){

var a =30;

let b = 20;

let c = 30;

}

fun();//this is function call

console.log(a)// it will call variable with value 50