// by using forEach loop
function sumOfSeries(n){
    let sum=0
    n.forEach(element => {
        sum+=(element*(element+1))/2
        
        
    });
    return sum
}
let n=[1,2,3,4,5]
console.log(sumOfSeries(n))

// by using for loop

function sumSeries(arr){
    let sum=0
    for(let i of arr){
        sum+=(i*(i+1))/2
    }
    return sum
}
let arr=[1,2,3,4,5]
console.log(sumSeries(arr))


// by using map
function sumSeriesMap(arr){
    let sum=arr.map((element)=>{
        return (element*(element+1))/2
    })
    return sum.reduce((a,b)=>a+b)
}
let arr1=[1,2,3,4,5]
console.log(sumSeriesMap(arr1))