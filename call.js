/*
call mehtod:
call method use "this" to invoke the the function with specific object which takes
argument as indivisually listed one by one.

*/

var obj = {num : 2, num1 : 4, num2 : 6};
var add=function(a,b){
    return this.num1 + a + b;
}
let n=2,m=8
console.log(add.call(obj,n,m));




function sum(c,d){
    return this.dum+c+d;
}
var cbj={dum:32,dum1:43}
let c=32,d=11
console.log(sum.call(cbj,c,d))