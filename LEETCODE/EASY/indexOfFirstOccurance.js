const IndexOfFirstIndex=(haystack,needle)=>{
    for(let i=0;i<=haystack.length-needle.length;i++){
        if(haystack.substring(i,i+needle.length)===needle){
            return i;
        }
    }
    return -1;

}
let haystack="leetcode",needle="sad"
console.log(IndexOfFirstIndex(haystack,needle))


//2nd method

var indexSimilarIndex=(str1,str2)=>{
    for(let i=0;i<str1.length-str2.length;i++){
        let flag=true
        for(let j=0;j<str2.length;j++){
            if(str1[i+j]!==str2[j]){
                flag=false;
                break;
            }
        }
        if(flag){
            return i
        }
    }
    return -1
}
let str1="sadbutsad",str2="sad"
console.log(indexSimilarIndex(str1,str2))