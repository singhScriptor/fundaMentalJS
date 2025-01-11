//let and const as we all know let and const is block scope 

console.log(l)
let l="Hello World"
/* here in this code you'll get a reference error because variable should be called out first
then it will print the result here l is in temporal dead zone then code should shift to the next line where we call the
variable then it will print "Hello WOrld" */ 

let h="Hello"
let john=function(){
    let h='Hey there' // we all know let is block scope and function scope and it is inside the function and we calling this inside the function and here we call the function declaration so it will print the result of inner function let.
    console.log(h)
}
john()
console.log(h)

let w='Hey Mamba'
let w='Hey Bro'
console.log(w)//here we get syntax error cause h is already declared and it is not inside the function so it will give an error! 


const v="Sri Radhey" // this is in global scope 
function xyz(){
    const v='Radhey Radhey' // this is in function scope
    console.log(v)
}
xyz()// const is also a block scope and here we call ing the function so it will display the inner function result 

// /* same you can't decalre same name variable using const too in same scope
// */
const i="Imangine"
const i="imagine"
console.log(i) //here also i variable is already declared so you can't redeclare the same variable in same scope.
//cause of duplication it will throw syntax error.


let reso=function(){
    const b="Boom"
    return ()=>{
        const b="Boom Saka Laka"
        console.log(b) // here also it will print inner function result where we calling the function inside the block
    }
}
let an=reso()
an()
reso()()//both will work


//var 

console.log(t)  // it will print undefined cause of hoisting
var t="Hey world"


var u='Hey Jude'
var u='Hey Siri' //here var is global scope so in global it will replace the old variable with the current one and print the same
console.log(u)

function outerFunction(){
    var f="Hello"
    function innerFunction(){
        var f="Hello World" // function has it's own variable so it is not behaving lexically
        console.log(f)
    }
    innerFunction()
}
outerFunction()


