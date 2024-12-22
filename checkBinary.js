function checkBinary(n){
    n=n.toString()
    for(let i in n){
        if (n[i] !== '0' && n[i] !== '1') {
            return false
        }
    }
    return true
}
let n=1010
console.log(checkBinary(n))



// using forEach loop
function checkBinaryEach(n){
    n=n.toString()
    n.split('').forEach(element => {
        if(element !== '0' || element !== '1'){
            return false
        }
        
    });
    return true
}
let n1=1010
console.log(checkBinaryEach(n1))

// using map
function checkBinaryMap(n){
    n=n.toString()
    return n.split('').map(element=>element === '0' || element === '1').every(ele=>ele)
}
let n2=1010
console.log(checkBinaryMap(n2))