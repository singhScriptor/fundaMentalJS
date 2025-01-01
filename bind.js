/*
BIND:
bind crates a new function which invoke 
'this' to get the provided  value from the given input 
values when the new function get called.
*/

//example :
var obj={num :23}
function sum(a,b){
    return this.num+a+b
}
let ans=sum.bind(obj,12)
console.log(ans(13))

//example 
var multiple=function(a,b){
    return a*b
}
let res=multiple.bind(null,5)
console.log(res(5))