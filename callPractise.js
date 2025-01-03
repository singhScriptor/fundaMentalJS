var obj={
    num:23,num2:12
}
function addTotal(a,b){
    return this.num+a+b
}
console.log(addTotal.call(obj,12,14))

var ob={l1:32}
let sum=function(d,c){
    return this.l1+d+c
}
console.log(sum.call(ob,14,16))

/*
call method use "this" to envoke the function with specific object
which takes argument indivisually.
*/
