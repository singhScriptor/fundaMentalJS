function removeElement(nums,val){
    let count=0
    for(let i=0;i<nums.length;i++){
        if(nums[i]===val){
            count++
        }
    }
    return count
}
let nums=[3,2,2,3],val=3
console.log(removeElement(nums,val))


//2nd method
const removeValue=(arr,target)=>{
    let dup=0
    for(let i=0;i<arr.length;i++){
        if(arr[i]!==target){
            arr[dup]=arr[i]
            dup++
        }
    }
    return dup
}
let arr = [3,2,2,3], target = 3
console.log("Duplicate elements count is",removeValue(arr,target))
