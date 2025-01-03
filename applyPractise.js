/*
apply method invokes with 'this' with specific object or an array 
*/

let arr=[1,2,3,4,5]
function sum(a,b,c,d,e){
    return a+b+c+d+e
}
console.log(sum.apply(null,arr)) // null beacause there is is no this method to invoke the object.

//exmaple with object

let obj = {a:1,b:2}
let frr=[4,5,6,8]
function totalSum(e,f,g,h){
    return this.a+e+f+g+h
}
console.log(totalSum.apply(obj,frr))

//maximumNumber 
function findMaximum(numbers){
    return Math.max.apply(null,numbers)
}
let numbers=[1,6,3,9,4,11,0]
console.log(findMaximum(numbers))


// function caps(strings){
//     return strings.map(str=>str.toUpperCase())
// }
// let strings=["hello","world","save","dave"]
// console.log(caps(strings))

