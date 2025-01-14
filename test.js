//Hoisting

// var a=20
// a=30 // this is allowed cause let and var allowed you to re assign the value 
// console.log(a)

// let z=34
// z=21
// console.log(z) 

// var a
// a=32 // this is also allowed both in let and variable to declare the variable and assign the value later
// console.log(a)

// let c
// c=21   // this too also allowed to reassign the value or assign value alter after decalration.
// console.log(c)

// const p=42
// p=21 // this is throw type error cause you can't reassign it again 
// console.log()

// const obj={key : 'Value'}
// obj.key='New Value' // this is allowed
// console.log(obj.key)

// let const and var

// const a=32
// function avc(){
//     const a =31 //due to different block we can call this a and it will not throw type error
//     console.log(a)
// }
// avc()

// if(true{
//     console.log('Hello') //this will also give snytax console.error;
    
// }
//declaring class using var let or const will also give syntax error

// "use strict";
// function av(){
//     console.log('Hello')
// }

// function av(){
//     console.log('Hello')

// }
// av()

// "use strict";

// function av(){
//     console.log('Hello');
// }

// function av(){
//     console.log('Hello');
// }

// av(); // This will still call the second 'av' function and print "Hello"



// let ac=function sumit(){
//     console.log('Jello')
// }
// let ac=function sumit(){
//     console.log('Mello')
// }
// //this will throw syntax error  cause varibale decalration of function expression is similar

// let jc= function jnu(){
//     console.log('jello')
// }
// jc()

// var c="hello World"
// console.log(c)

//lexical Scope
function outerFunction(){
    let a="Hey there!"
    function innerFunction(){
        console.log(a)
    }
    innerFunction()
}
outerFunction()


