/*
forEach is a method where we manipulate an array without returning the new array
*/ 

//Example
function multiply(arr){
    arr.forEach(element => console.log(element*2))
}
let arr=[1,2,3,4,5]
multiply(arr)


// using return in forEach
let multi=(jrr)=>{
    jrr.forEach(ele=>{
        console.log(ele*3)
    })
}
let jrr=[4,5,6,7,8]
console.log(multi(jrr))

//result with index
let fruits=['Apple','Banana','Cherry']
fruits.forEach((fruit,index)=>{
    console.log(`Index : ${index}, FruitName : ${fruit}`)
})

//sum of an arr using ForEach

function sumOfNumber(num){
    let sum=0
    num.forEach(ele=>{
        sum+=ele
    })
    return sum
}
let num=[10,20,30,40,50]
console.log(sumOfNumber(num))