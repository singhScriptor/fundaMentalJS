function swapNum(a,b){
    let temp=a;
    a=b;
    b=temp;
    return [a,b]
    //or
    //console.log(a,b)
}
let a=2,b=10
console.log(swapNum(a,b))