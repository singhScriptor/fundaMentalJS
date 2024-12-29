var findPalindrome=(string)=>{
    for(let i=0;i<string.length;i++){
        if(string[i] !== string[string.length-1-i]){
            return false
        }
    }
    return true
}
let s="madam"
console.log(findPalindrome(s))