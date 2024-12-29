function longestCommonPrefix(strs){
    //if not passing all the test cases then kindly use this method before align this code
    //strs.sort()
    if(strs.length === 0) return  ''
    let left = strs[0], right=strs[strs.length-1],ans=0
    while(ans<left.length && ans<right.length && left[ans]===right[ans]){
        ans++
    }
    return left.substring(0,ans)
}
let strs=["flower","flow","flight"]
console.log(longestCommonPrefix(strs))