/*
hoisiting is a behaviour where variable and function  declaration will be at the top before the execution of code.
it allow variable and function to be used first before it's declaration.


*/

//Example:


console.log(word)
var word="Hello" // it will be undefined

console.log(sr)
let sr="Hey" //here sr will be not get called out before declaration so it will be reference error


var s="Go there"
let g="Hey There!"
console.log(g)
console.log(s) // these will work perfectly


//function example
Game() //this will work perfectly fine because of function decalartion
function Game() {
    console.log("Function is hoisted!")
}


game()//this will be a typeError cause game is not a function
var game = ()=>{
    console.log("this will throw error!")
}

fame()
let fame=function(){
    console.log("this will throw reference error!")
}





