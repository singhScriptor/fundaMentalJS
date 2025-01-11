// hoisting is a behaviour where function and variable will be call first before calling or declaring the variable or function.

//Example 

var c= "Hey THere"
var c='Go there'
console.log(c)

console.log(c)
var c="Mount Abu" // this will thorw undefined
// and this behavior due to hoisting where variable will be called first and variable in starting value will be undefined 
let c="Hey Ram" //let is block scope sos it will throw reference error beacuse we are calling this befor decalring
// same will happen with const

/*
function */
abc() // this will also work as i said entire function declaration will move at the top due to hoisting
function abc(){
    console.log("Caught out")
}
abc()// here abc() will called first  which means entire function declaration will move to the top due to hoisting.

