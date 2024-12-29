let mergeTwoList=(l1,l2)=>{
    let mergeList=l1.concat(l2)
    mergeList.sort((a,b)=>a-b)
    return mergeList
}
let l1=[1,2,4],l2=[1,3,4]
console.log(mergeTwoList(l1,l2))


// 2nd method using linked list 

let mergedTwoList=(l1,l2)=>{
    let newNode=new ListNode(0)
    let temp=newNode
    while(l1 && l2){
        if(l1.val < l2.val){
            temp.next=l1
            l1=l1.next
        }
        else{
            temp.next=l2
            l2=l2.next
        }
        temp=temp.next
    }
    if(l1)temp.next=l1
    if(l2)temp.next=l2
    return newNode.next
}