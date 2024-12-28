var palindrome=(x)=>{
    let rev=0,temp=x
    while(x>0){
        let digit=x%10
        rev=rev*10+digit
        x=Math.floor(x/10)
    }
    return temp===rev
}
let x=121
console.log(palindrome(x))