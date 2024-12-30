const lastWordLength=(s)=>{
    let flag=false;count=0
    for(let i in s){
        if(s[s.length-i-1] !== ' '){
            flag=true;
            count++;
        }
        else if(flag){
            break
        }
    }
    return count
}
let s="Hello World"
console.log(lastWordLength(s))