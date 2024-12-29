function fibonacci(n){
    if(n<=1)return n 
    return fibonacci(n-1)+fibonacci(n-2)
}
let n=10
console.log(fibonacci(n))

//fibonacciSeires

function fibsSeries(m){
    if(n<=0)return []
    if(n===1)reutrn [0]
    let arr=[0,1]
    for(let i=2;i<=m;i++){
        arr.push(arr[i-1]+arr[i-2])
    }
    //return arr[arr.length-1] this will display only 55
    return arr // and this will display series of fibonacci
}
let m=10
console.log(fibsSeries(m))

//
function fib(v){
    if(n<=0)return 0
    if(n===1)return 1
    let a=0,b=1
    for(let i=2;i<=v;i++){
        let temp=a+b 
        a=b 
        b=temp 
    }
    return b 

}
let v=10
console.log(fib(v))

