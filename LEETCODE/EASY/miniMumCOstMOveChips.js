let minCOstMoveChipsTHeSamePosition=(arr)=>{
    let odd=0,even=0;
    for(let i=0;i<arr.length;i++){
        if(arr[i]%2===0){
            even++
        }
        else{
            odd++
        }
    }
    return Math.min(odd,even)
}
let position=[1,2,3]
console.log(minCOstMoveChipsTHeSamePosition(position))