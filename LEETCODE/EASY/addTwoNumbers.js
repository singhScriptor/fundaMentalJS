let addTwoNumbers=(l1,l2)=>{
    let ans=0, arr=[],length=Math.max(l1.length,l2.length)
    for(let i=0;i<length;i++){
        let arr1=l1[i] !== undefined ? l1[i] : 0;
        let arr2=l2[i] !== undefined ? l2[i] : 0;
        let sum=arr1+arr2+ans;
        ans=Math.floor(sum/10)
        arr.push(sum%10)
    }
    if(ans>0){
        arr.push(ans)
    }
    return arr
}
let l1=[2,4,3],l2=[5,6,4]
console.log(addTwoNumbers(l1,l2))

const twoArraySum=(ar1,ar2)=>{
    let res=0,jrr=[],length=Math.max(ar1.length,ar2.length)
    for(let i=0;i<length;i++){
        let dig1=ar1[i] !== undefined ? ar1[i] : 0 ;
        let dig2=ar2[i] !== undefined ? ar2[i] : 0 ;

        let total = dig1 + dig2 + res;
        res=Math.floor(total/10)
        jrr.push(total%10)
    }
    if(res>0){
        jrr.push(res)
    }
    return jrr
}
let ar1=[2,4,3],ar2=[5,6,4]
console.log(twoArraySum(ar1,ar2))