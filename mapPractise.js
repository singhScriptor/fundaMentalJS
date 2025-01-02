function multiply(arr){
    return arr.map(ele=>ele*2)
}
let arr=[1,2,3,4,5]
console.log(multiply(arr))
/*
it will multiply into 2 of each
element of an array
*/


function result(words){
    return words.map(ele=>ele.toUpperCase())

}
let words=["hello",'world','answer']
console.log(result(words))


//print only name from array
function printName(details){
    return details.map(ele=>ele.Name)
}
let details=
[
    {Name : "Amit", Description : "Student"},
    {Name : "Rahul", Description : "Teacher"},
    {Name : "Arijit", Description :"Singer"}
]
console.log(printName(details))


let multiplyD={
    factor : 10,
    multi:function(arr){
        return arr.map(ele=>ele*this.factor)
    }

}
let frr=[1,2,3,4,5]
console.log(multiplyD.multi(frr))

//map return a new array while iterating the array
