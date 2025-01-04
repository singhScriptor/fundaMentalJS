/*
bind is invoked with 'this' to get the provided value from object or function when new function called.
*/

let obj={n:23,m:33,z:43}
function totalSum(a,b){
    return this.n+a+b
}
let ans=totalSum.bind(obj,23)
console.log(ans(67))


