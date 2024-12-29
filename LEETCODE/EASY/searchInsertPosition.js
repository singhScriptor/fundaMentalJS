
//time complexity O(n)
let searchInsertPosition=(nums,target)=>{
    for(let i=0;i<nums.length;i++){
        if(nums[i]==target){
            return i
        }
    }
    return -1
}
let nums=[1,3,5,6],target=5
console.log(searchInsertPosition(nums,target))


//time complexity O(log n)

const indexPosition=(nums,target)=>{
    let left=0,right=nums.length-1
    while(left<=right){
        let mid=Math.floor((left+right)/2)
        if(nums[mid]==target){
            return mid
        }
        else if(nums[mid]<target){
            left=mid+1
        }
        else{
            right=mid-1
        }
    }
    return left
}
let n = [1, 3, 5, 6], t = 5;
console.log(indexPosition(n,t))

