let removeDuplicate=(nums)=>{
    //nums.sort()
    let set={},arr=[]
    for(let i of nums){
        if(!(i in set)){
            set[i]=1
            arr.push(i)
        }
    }
    return arr
}
let nums=[1,1,2]
console.log(removeDuplicate(nums))

//2nd method
let avoidDuplicate=(arr)=>{
    let left=0
    for(let i=0; i<arr.length;i++){
        if(arr[left] !== arr[i]){
            left++
            arr[left]=arr[i]
        } 
    }
    return left+1
}
let arr=[0,0,1,1,1,2,2,3,3,4]
console.log(avoidDuplicate(arr))


let removeDuplicat=(nums)=>{
    nums.sort()
    let set={},count=0
    for(let i of nums){
        if(!(i in set)){
            set[i]=1
            count++
        }
    }
    return count
}
let num=[1,1,2]
console.log(removeDuplicat(num))