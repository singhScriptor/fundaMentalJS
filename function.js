
//Anonymous function

// function (){


// }

// setTimeout(function(){ //here function directly used as an argument
//     console.log("This's is an anonymous function")
// },1000)


/* 
Using (IIFE) => Immediately invoked function expression.
*/
(function(){
    console.log('Hello World')

})
() // this is called immedeately invoke function expression(IIFE)


//anonymous funciton using fat arrow
var j=()=>{
    console.log("HEY DRJ")
}
j()

//anonymous function using argument
setTimeout(function(){
    console.log('Let go')
},1000)


//anonymous function using function expression
var v=function(){
    console.log("COme Here")
}
v() 


//function expression

// named function expression
let answer=function name(){
    console.log('Hi Bunny')
}
answer()


//arrow function expression
let z=()=>{
    console.log('Hey There')
}
z()


//basic function expression
let p=function(){
    console.log("Go there")
}
p()

/* function Declaration  also known as function statement*/
function meet(){
    console.log('Come to meet me')
}
meet()

function m(a,c){ //here a,c is paramenter

}
meet(v,p)//here v,p is arguments

/*
we can return function from a function and can also able to use function as an arguments.
*/

//Example
function outerFunction(){
    return function(){
        console.log('Ineer function')
    }
}
//outerFunction()() // direct invocation
let innerFunction=outerFunction()//storing in variable
innerFunction()


//first class function

/*

the abilty to use as value and assigned it to as variable can passed as an argument and can be returned out from another function is first class function.

*/







