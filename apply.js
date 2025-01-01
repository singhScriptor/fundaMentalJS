/*
Apply method use "this" method to invoke the specific object or an array
of arguments
*/

//example:
function sum(a,b,c){
    return this.num+a+b+c;
}
let obj={num:23},arr=[1,4,8]
console.log(sum.apply(obj,arr))

function total(a,b,c){
    return a+b+c
}
let jrr=[3,6,9]
console.log(total.apply(null,jrr))//null because there is no value of this argument so it will be null"
