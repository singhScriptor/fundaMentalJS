function romanToInteger(s){
    const values={'I': 1, "V" : 5, 'X' : 10, 'L' : 50, "C" : 100, 'D':500, 'M' : 1000}
    let ans=0
    for(let i=0;i<s.length;i++){
        if(i<s.length-1 && values[s[i]] < values [s[i+1]] ){
            ans-=values[s[i]]
        }
        else{
            ans+=values[s[i]]
        }
    }
    return ans
}
let s="LVIII"
console.log(romanToInteger(s))