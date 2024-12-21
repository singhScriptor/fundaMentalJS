//SPREAD OPERATOR

/*
spread operator is used for copying array and object,adding element to array
merging two arrays and objects & converting iterable object to array
*/

//Copying array
let arr=[1,2,3,4,5]
const copy=[...arr]
console.log(copy)

//adding element to array
let arr1=[1,2,3,4,5]
arr1=[...arr1,6,7,8]
console.log(arr1)

//one more example
let arr2=[1,2,3,4,5]
let arr3=[6,7,8]
const arr4=[...arr2,...arr3,9,10]
console.log(arr4)


//merging two array
let arr5=[...arr2,...arr3]
console.log(arr5)

//Copying object
const obj1={a:1,b:2,c:3}
const c={...obj1}
console.log(c)

//merging two or more object
const obj2={d:4,e:5}
const obj3={f:6,g:7}
const obj4={...obj1,...obj2,...obj3}
console.log(obj4)

//converting iterable object to array
let str='hello'
let s=[...str]
console.log(s)

//passing element of array as arguement to function
let numbers=[1,2,3,4,5]
let sum=(a,b,c,d,e)=>a+b+c+d+e
console.log(sum(...numbers))