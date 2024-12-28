let addTwoNumbers=(l1,l2)=>{
    let ans=0
    let arr=[]
    let length=Math.max(l1.length,l2.length)
    for(let i=0;i<length;i++){
        let digit1=l1[i] !== undefined ? l1[i] : 0;
        let digit2=l2[i] !== undefined ? l2[i] : 0;

        let sum=digit1+digit2+ans
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