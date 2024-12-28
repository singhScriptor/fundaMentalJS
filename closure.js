// function init() {
//     var name="Arjun"
//     return function display(){
//         return name
//     }
// }
// let displayName=init()
// console.log(displayName())


// function outerFunction() {
//     let outervalue="Helloo"
//     function innerFunction(){
//         console.log(outervalue)
//     }
//     return innerFunction;
// }
// let ans=outerFunction()
// ans()


function outerFunction(){
    let d="Hello World"
    return function innerFunction(){
        console.log(d)
    }
}
let an=outerFunction()
an()
//outerFunction()