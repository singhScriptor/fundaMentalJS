function init() {
    var name="Arjun"
    return function display(){
        return name
    }
}
let displayName=init()
console.log(displayName())


function outerFunction() {
    let outervalue="Helloo"
    function innerFunction(){
        console.log(outervalue)
    }
    return innerFunction;
}
let ans=outerFunction()
ans()


function outerFunc(){
    let d="Hello World"
    return function innerFunc(){
        console.log(d)
    }
}
let an=outerFunc()
an()
//outerFunction()


//lexicalScope
function lexical(){
    let o='Delulu'
    function lexo(){
        console.log(o)
    }
    lexo()
}
lexical()

//fat arrow  for closure
const DRJ=()=>{
    let b="Jai Mata Di"
    return ()=>{
        console.log(b)
    }

}
let s=DRJ()
s()

const myF=()=>{
    let jsi="Hello There!"
    const jrf=()=>{
        console.log(jsi)
    }
    return jrf
}
let m=myF()
m()

function lexoS(){
    let dab="Hello India"
    let zab=()=>{
        return dab
    }
    return zab
}
let ab=lexoS()
console.log(ab())

/*
closure is a method where we use lexical scope 
of variable and function and outer is being called
even after the exection from the inner function
*/

