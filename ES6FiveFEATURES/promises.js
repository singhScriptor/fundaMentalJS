//PROMISES

/*

Promises are a way to handle asynchronous operations in JavaScript. 
They are easy to manage when dealing with multiple asynchronous operations 
where callbacks can create callback hell leading to unmanageable code.

*/

//example:
let promise=new Promise((resolve,reject)=>{
    let a=10
    if(a==10){
        resolve('Success')
    }else{
        reject('Failed')
    }
})

