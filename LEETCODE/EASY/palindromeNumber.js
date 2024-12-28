// var palindrome=(x)=>{
//     let rev=0,temp=x
//     while(x>0){
//         let digit=x%10
//         rev=rev*10+digit
//         x=Math.floor(x/10)
//     }
//     return temp===rev
// }
// let x=121
// console.log(palindrome(x))


var palindrome = (x) => {
    let temp = x , rev = 0 ;
    while(x>0) {
        let digit = x % 10
        rev = rev * 10 + digit
        x = Math.floor(x/10)
    }
    return temp === rev
}
let x=311
console.log(palindrome(x))