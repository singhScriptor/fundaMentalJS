//Reference error where you can't able to access variable or function that kind of error is reference error
//Example

// function xyz(){
//     console.log('Hello World')
// }
// zxy() // this will throw reference error
// console.log(zvm()) //same this will also throw reference error;


// let c="Hello"
// console.log(p)// this will also throw a reference error

//syntax Error
 /* so syntax error has a tendency that it will throw an error when the duplicate variable and function already defined */

//  let c="Gane"
// let c="gameChanger"
// console.log(c)


//var = 10 // this will also throw a syntax error

//but this is not throwing an error!
// let =20 
 // for seeing reference error you have to add "Use Strict " method
// "use strict"
//  let =34

// function (){ // this will throw syntax error cause here function statement requires a name.
//     function jcb(){
//         console.log('Hello World')
//     }
//     return jcb
// }
// ()()

// function variableError(){
//     let c=10,c==20 //syntax error cause c is already declared
//     console.log(c)
// }
// console.log(variableError())

// let m= function(){
//     console.log('Hello')
// }
// let m=function(){ // will throw syntax error cause m is already defined
//     console.log('Hey Drj')
// }


//TypeError
// let m=5
// m() // this will throw type error  cause m is not a function

// let str="Hello"
// str.push('World') // this will also through type Error cause str is not an array


// let v=[]
// let ans=new v();
// //this will also through type Error cause v is not a class or constructor

let p=null //type Error cause can't read the property of null
try{
    console.log(p.property)
}
catch(e){
    console.error(e)
}


