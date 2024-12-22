function sumOfDigit(n){
    let sum=0
    while(n>0){
        sum+=n%10
        n=Math.floor(n/10)
    }
    return sum
}
let n=423
console.log(sumOfDigit(n))

//using for loop

function sumOfDigitFor(n){
    n=n.toString() //convert number to string
    let sum=0
    for(let i=0;i<n.length;i++){
        sum+=parseInt(n[i]) //convert string to number
    }
    return sum
}
let m=423
console.log(sumOfDigitFor(m))
