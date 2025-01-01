// //call

// var obj={num:2}

// var addToThis = function(a,b,c){
//     return this.num + a + b + c
// }

// console.log(addToThis.call(obj,3)) 
// //functionname.call(object,functionarguments)


// //example in array

// var arr=[1,2,3]
// console.log(addToThis.apply(obj,arr))


// //another apply use

// var obj1={num:2}
// var obj2={num:5}

// var AddToThis = function(a,b,c){
//     return this.num+a+b+c
// }
// var arr=[1,2,3]
// console.log(addToThis.apply(obj1,arr))
// console.log(addToThis.apply(obj2,arr))



//bind

var obj3={num:3}
var functionName=function(arg1,arg2,arg3){
    return this.num + arg1 + arg2 + arg3 
 
}
let call=functionName.bind(obj3)
console.log(call(4,5,6))
