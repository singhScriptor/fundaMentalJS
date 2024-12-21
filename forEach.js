//forEach()
/*
The forEach() method calls a function once for each element in an array, in order.
*/
var arr=[1,2,3,5]
var newArr=arr.forEach((item,index)=>{
    console.log(item,'index',index)
    return item + index // if you don't use console.log inside forEach it will return undefined by using return.
})
//console.log(newArr)//  this will print undefined


//another example
var jrr=[2,4,6,8]
jrr.forEach(element=>{
    console.log(element)
})

//example with this context

let obj={
    multiplier:2,
    multiply:function(element){
        console.log(element*this.multiplier)
    }


}
let arr1=[1,2,3,4,5]
arr1.forEach((element)=>{
    obj.multiply(element)
})