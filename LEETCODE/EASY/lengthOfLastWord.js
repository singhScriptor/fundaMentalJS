const lengthOfLastWord=(s)=>{
    let count=0,flag=false;
    for(let i=s.length-1;i>=0;i--){
        if(s[i]!==' '){
            flag=true
            count++
            
        }
        else if(flag){
            break
        }
    }
    return count

}
let s="fly me to the moon"
console.log(lengthOfLastWord(s))

let lenOfLastWords=(s)=>{
    let count=0,flag=false
    for(let i=0;i<s.length;i++){
        if(s[s.length-i-1] !== " "){
            flag=true
            count++
        }
        else if(flag){
            break
        }
    }
    return count
}
let v="Hello World"
console.log(lenOfLastWords(v))
