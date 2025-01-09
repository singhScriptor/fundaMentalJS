
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