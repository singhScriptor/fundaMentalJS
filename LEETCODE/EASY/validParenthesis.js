let validParenthesis=(s)=>{
    while(s.length){
        let temp=s
        s=s.replace("{}","")
        s=s.replace("[]","")
        s=s.replace("()","")
        if(s===temp)return false
    }
    return true
}
let s='({}{])'
console.log(validParenthesis(s))


//use of replace method demonstration
//Note : replace method will only use with string not with numbers"

//example :
let str='Hello World'
let ans=str.replace('World','Universe')
console.log(ans)




