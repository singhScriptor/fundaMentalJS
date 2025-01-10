let complementOfBase10=(n)=>{
    n=n.toString(2)
    let result=''
    for(let i=0;i<n.length;i++){
        if(n[i]==='1'){
            result+='0'
        }
        else{
            result+='1'
        }
    }
    return parseInt(result,2)
}
console.log(complementOfBase10(5))