function a(){
//     console.log(b)// this will give output 10
//     //this is because of scope
//     /*a scope where you can access a specific variable and 
//     and function in a code*/
//     var b=10
// }
// //var b=10
// a()
// console.log(b) // now this will give reference error

// //there are 3 types of scope
// /*
// 1:Global Scope
// 2:Function Scope
// 3:Block Scope
// */

// //Global Scope:
// /*
// variable can be declared outside of function or block
// in the global scope they are acceeible from any part of the code
// */

// //Example:
// var globalVar="I am a global variable"
// function globalFunction(){
//     console.log(globalVar)//accessing global variable
// }
// globalFunction()
// console.log(globalVar)//accessing global variable

// //Function Scope:

// /*      
// in functon scope variable can be accessed only inside the function
// */
// function functionScope(){
//     var functionVar="I am a function variable"
//     console.log(functionVar)//accessing function variable
// }
// functionScope()
// console.log(functionVar) // this will throw an error (not defined) becuase it is not accessible from outside of function.


// //Block Scope:
// /*
// in block scope variable can be accessed only inside the block (eg:{},like :- if,for,while,switch,try,catch,then)
// */


// //Example::
// if (true) {
//     let blockVar = "I am a block variable";
//     console.log(blockVar); // Accessible here
// }

// console.log(blockVar); 