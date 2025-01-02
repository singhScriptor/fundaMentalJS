//closure practise in function reference
let outerFun=()=>{
    let value="I'm from outer function"
    let innerFun=()=>{
        console.log(value)
    }
    return innerFun
}
let ans=outerFun()
ans()

/*
in closure is created when a function is defined inside another function and the inner function retain the 
access of outer function even after the return of outerfunction
*/

function otFunction(){
    let message="outer function"
    function inFunction(){
        console.log(message)
    }
    return inFunction
}
let dj=otFunction()
dj()