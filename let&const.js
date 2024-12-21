// let and const is also hoisted but in a temporal dead zone

// let a=10
// console.log(a)

let a = 5;

var b = 6;



console.log(this.b); // this will print value of b

console.log(window.b) // this will also print value of b

console.log(window.a) //let is block scoped so it will not be available in window object

console.log(this.a);//let is block scoped so it will not be available in window object