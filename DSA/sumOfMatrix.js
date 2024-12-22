function sumOfMAtrix(matrix) {
    let sum=0
  for(let i=0;i<matrix.length;i++) {
    sum+=matrix[i].reduce((a,b)=>a+b,0)
  }
  return sum
}
let mat=[[1,2,3],[4,5,6]];
console.log(sumOfMAtrix(mat));