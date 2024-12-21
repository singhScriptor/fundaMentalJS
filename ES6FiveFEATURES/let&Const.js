// 'let' is block-scoped and mmutable

let x=10

x=32 //this will print 32 after console.log(x)

let x=42 //this will throw a syntax error because x is already defined
console.log(x)


//'const' is block-scoped and immutable

const c=20

c=32   //this will throw type error because we cannot reassign a value to a const variable

const c=42   //this will thrwo sytax error because c is already defined

console.log(c)
