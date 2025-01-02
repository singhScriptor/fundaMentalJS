//lexicalScope in function reference

let outerFunction  = ()=>{
    let value='Outer Value'
    let innerFunction = ()=>{
        console.log(value)
    }
    innerFunction()
}
outerFunction()

//lexical Scope in function declaration
function outerFn(){
    let c="value of outer"
    function innerFunction(){
        console.log(c)
    }
    innerFunction()
}
outerFn()