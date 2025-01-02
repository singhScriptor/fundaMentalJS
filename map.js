// map()

/*
map return a new array with the result of calling a 
provided function on every element in the array
*/

var arr=[1,2,3,4,5]
let multiply=arr.map((ele)=>ele*2)
console.log(multiply)

//another example
let words=['hello','world','how','are','you']
let capital=words.map((word)=>word.toUpperCase())
console.log(capital)

// you can also use map for extracting value from object
let users=[
    {name:'Amit',age:21},
    {name:'Rahul',age:22},
    {name:'Rohit',age:23}
]
let n=users.map((user)=>user.name)
console.log(n)


//this method example

let multiplierObject={
    factor:5,
    multiply:function(arr){
        return arr.map((ele)=>ele*this.factor)
    }
}
let numbers=[1,2,3,4,5]
console.log(multiplierObject.multiply(numbers))


//another example
let newArr=[1,2,3,4,5].map(doubleEven)
function doubleEven(ele,index,newArr){
  if(ele%2===0)return ele*2  //if not even it will print undefined for odd element
  else return ele // now it will print odd element
}
console.log(newArr)

//map which will return a new array while iterating the array
