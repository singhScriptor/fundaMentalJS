let x=10
x=32
console.log(x)


// 'let' is block-scoped and 'const' is block-scoped and immutable

const c=20
c=32
console.log(c)
//this will throw an error because we cannot reassign a value to a const variable
// Error type will be type Error!