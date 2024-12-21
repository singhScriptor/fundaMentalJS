/*
there are three types of errors in JavaScript:
1:typeError
2:ReferenceError
3:syntaxError
*/

//1: TypeError : This error is thrown when a value is not of the expected type.

//example:
let a=40
console.log(a.toUpperCase())//this will throw a TypeError because toUpperCase() is not a method of number

let b='Hello'
console.log(b.push('world'))//this will throw a TypeError because push() is not a method of string


//2: ReferenceError : This error is thrown when a non-existent variable is referenced or temporal dead zone variable refered.

//example:
console.log(mar)//this will throw a reference error because mar is in temporal dead zone or not initalized
let mar=10

console.log(x)//this will throw a reference error because x is not defined and we are accessing it inside the code


// 3: SyntaxError : This error is thrown when there is a duplicate variable inside the code.

//example:
let a=10
let a=20//this will throw a syntax error because a is already defined in the code

const b=10
const b=20//this will throw a syntax error because b is already defined in the code

//but with var it will not throw any error
var c=10
var c=20//this will not throw any error because var can be redefined


//Note:
/* 

let can be initialized only and then assinged a value later .
but const must be initialized and assigned a value at the same time.

*/