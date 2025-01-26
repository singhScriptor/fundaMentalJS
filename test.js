// // // //Hoisting

// // // // var a=20
// // // // a=30 // this is allowed cause let and var allowed you to re assign the value 
// // // // console.log(a)

// // // // let z=34
// // // // z=21
// // // // console.log(z) 

// // // // var a
// // // // a=32 // this is also allowed both in let and variable to declare the variable and assign the value later
// // // // console.log(a)

// // // // let c
// // // // c=21   // this too also allowed to reassign the value or assign value alter after decalration.
// // // // console.log(c)

// // // // const p=42
// // // // p=21 // this is throw type error cause you can't reassign it again 
// // // // console.log()

// // // // const obj={key : 'Value'}
// // // // obj.key='New Value' // this is allowed
// // // // console.log(obj.key)

// // // // let const and var

// // // // const a=32
// // // // function avc(){
// // // //     const a =31 //due to different block we can call this a and it will not throw type error
// // // //     console.log(a)
// // // // }
// // // // avc()

// // // // if(true{
// // // //     console.log('Hello') //this will also give snytax console.error;
    
// // // // }
// // // //declaring class using var let or const will also give syntax error

// // // // "use strict";
// // // // function av(){
// // // //     console.log('Hello')
// // // // }

// // // // function av(){
// // // //     console.log('Hello')

// // // // }
// // // // av()

// // // // "use strict";

// // // // function av(){
// // // //     console.log('Hello');
// // // // }

// // // // function av(){
// // // //     console.log('Hello');
// // // // }

// // // // av(); // This will still call the second 'av' function and print "Hello"



// // // // let ac=function sumit(){
// // // //     console.log('Jello')
// // // // }
// // // // let ac=function sumit(){
// // // //     console.log('Mello')
// // // // }
// // // // //this will throw syntax error  cause varibale decalration of function expression is similar

// // // // let jc= function jnu(){
// // // //     console.log('jello')
// // // // }
// // // // jc()

// // // // var c="hello World"
// // // // console.log(c)

// // // //lexical Scope
// // // // function outerFunction(){
// // // //     let a="Hey there!"
// // // //     function innerFunction(){
// // // //         console.log(a)
// // // //     }
// // // //     innerFunction()
// // // // }
// // // // outerFunction()

// // // //closure

// // // // function outerFunction(){
// // // //     let a="ZNMD"
// // // //     function innerFunction(){
// // // //         console.log(a)
// // // //     }
// // // //     return innerFunction
// // // // }
// // // // let c=outerFunction()
// // // // c()


// // // // function outerFunction(){
// // // //     let z='Hello'
// // // //     function innerFunction(){
// // // //         console.log(z)
// // // //     }
// // // //     return innerFunction
// // // // }
// // // // outerFunction()()
// // // // //let ans=outerFunction()
// // // // //ans()

// // // //bind invokes by this to provide the value and create a new function  called the value

// // // let person={
// // //     name: "Arjun",
// // //     class: "ISE",
// // //     section:"A",
// // //     Roll_No:23,
// // //     fullName:function(){
// // //         console.log(`${this.name} Singh`)
// // //     }

// // // }
// // // let anotherPerson={
// // //     name:"SANJU"
// // // }
// // // let details=person.fullName.bind(anotherPerson)
// // // details()


// // // function add(a,b){
// // //     return a+b
// // // }
// // // let addFive=add.bind(null,5,10)
// // // console.log(addFive())

// // // let marks={
// // //     "CSE":32,
// // //     "DSA":42,
// // //     "Op":52,
// // //     "DBMS":54,
// // //     'TotalMarks':function total(){
// // //         let result=this.CSE+this.DSA+this.Op+this.DBMS
// // //         console.log(result)
// // //     }

// // // }
// // // let anotherMarks={
// // //     "CSE" : 56,
// // //     "DSA": 67,
// // //     "Op" :76,
// // //     "DBMS" : 82
// // // }
// // // let declare=marks.TotalMarks.bind(anotherMarks)
// // // declare()


// // // function multiply(a,v){
// // //     return a*v
// // // }
// // // let res=multiply.bind(null,4)
// // // console.log(res(5))


// // // let button={
// // //     label:"Button",
// // //     handleCLick:function(){ // you can't add arrow function to use bind
// // //         console.log(`${this.label} is Clicked`)
// // //     }
// // // }
// // // let buttonRes=document.createElement('button')
// // // buttonRes.textContent=button.label
// // // document.body.appendChild(buttonRes)
// // // buttonRes.addEventListener("click",button.handleCLick.bind(button))

// // // class counter{
// // //     constructor(){
// // //         this.count=0
// // //         this.increment=this.increment.bind(this)
// // //     }
// // //     increment(){
// // //         this.count++
// // //         console.log(this.count)
// // //     }
// // // }
// // // const c=new counter();
// // // document.addEventListener('click',c.increment)


// // // let calculator={
// // //     value:5,
// // //     calculate:function(){
// // //         function innerFunction(){
// // //             console.log(this.value)
// // //         }
// // //         innerFunction.bind(this)()
// // //     }
// // // }
// // // calculator.calculate() //calculator is object and calculate is an key which will be used as method 

// // // class Car{
// // //     constructor(brand){
// // //         this.brand=brand
// // //         this.showBrand=this.showBrand.bind(this)
// // //     }
// // //     showBrand(){
// // //         console.log(this.brand )
// // //     }
// // // }
// // // let myCar=new Car("Toyota")
// // // setTimeout(myCar.showBrand,5000)

// // // let obj={
// // //     brand:"BMW",
// // //     model:'s7',
// // //     result:function(){
// // //         console.log(this.brand)
// // //     }
// // // }
// // // obj.result.call(obj)

// // // function greet(name,cb){
// // //     console.log(`Hello ${name}`)
// // //     cb()
// // // }
// // // function sayGoodBye(){
// // //     console.log('Good Bye!')
// // // }
// // // greet('Alice',sayGoodBye)

// // // setTimeout(function(){
// // //     console.log('THis will call later')
// // // },3000)

// // // function x(cb){
// // //     console.log('Hello')
// // //     cb()
// // // }

// // // function y(){
// // //     console.log('WOrld') 
// // // }
// // // x(y)



// // // function xyz(cb){
// // //     console.log("hey Ram!")
// // //     cb()

// // // }
// // // function znx(){
// // //     console.log("Znx printed")
// // // }
// // // xyz(znx)

// // // function dbc(){
// // //     let count=0
// // //     return setTimeout(function dataCount(){
// // //         console.log('data count',count++)
        
// // //     },2000)
// // // }
// // // dbc()


// // // function p(){
// // //     console.log('P called')
// // //     return setTimeout(function(){
// // //         console.log("hello Drj")
// // //     },1000)
// // // }
// // // p()

// // // // let x=10
// // // // console.log(x++)

// // // const v=23
// // // console.log(v)

// // // const ap="termeric "
// // // console.log(setTimeout(function(){
// // //     console.log(ap)
// // // },6000))


// // // //when you take a function and pass it to the another function is called called callback as we all know javascript is single threaded language which means it works one at a time so these scenario like async will be helped by callback

// // // let data=()=>{
// // //     console.log('Hey Radhey')
// // //     setTimeout(function(){
// // //         console.log('Hey VishwaKarma')
// // //     },6000)
// // // }
// // // data()

// // // let bttn={
// // //     label:'button',
// // //     handelClick:function(){

// // //     }

// // // }



// // // let game="SubWay"
// // // console.log(game)
// // // // let game="Subway"
// // // // console.log(game)


// // // //good gamble 

// // // let arv=function(){
// // //     console.log("Arjun")
// // // }
// // // arv()

// // //here  function and variable will be called function if the variable is global  then it is undefined as a result where as if the variable is blocked scope then it will be called as reference error. this process is called hoisting .

// // // console.log(va)
// // // let va="value printed"
// // //console.log(va)

// // //hoisting is a method where variable and function declaration will move at the top before before execution

// // console.log(v)
// // let vi="Vd Madness"
// // console.log(vi)

// // console.log(b)
// // var b="Madness"
// // console.log(b)

// // //lexical Scope

// // /*
// // in lexical scope where outer function can be access inside the inner function .
// // */
// // function first(){
// //     let n="Hello"
// //     function second(){
// //         console.log(n)
// //     }
// //     second()
// // }
// // first()

// // closure

// // /*
// // closure where the function have lexical environment and inner function can acess the outer function even after the outer function has completed the execution.
// // */
// // function outerFunction(){
// //     let value='Hey there'
// //     function innerFunction(){
// //         console.log(value)
// //     }
// //     return innerFunction
// // }
// // //outerFunction()()
// // //or 
// // let ans=outerFunction()
// // ans()

// // /*
// // temporal deadZone: we all know in hoisting variable and function will assign at top  in that process block scope let and const before assigning the value of the variable that  will be a temporal dead zone .
// // */
// // //example:


// // //let a= // these free lines brefore assign the variable value is in temporal dead zone 


// // //global

// // /* 
// // in global variable can be called using let const and var offcourse but we have to use only var because var is a global scope and we can call window  too in global scpe using var.

// // */



// // function demoRes(){
// //     let b="Gajini"
// //     console.log('Hello World DUmbs'  + " " + b) 
// // }
// // demoRes()

// // // 
// // /*
// // if you are using var for variable input then it can be renamed with same value cause it is global scope so it can be renamed with same variable
// // */
// // //Example:
// // var v="Hello"
// // var v="World"
// // console.log(v)

// // const name="Dhiraj Kr";
// // age=21
// // console.log(delete name)
// // console.log(delete age)// in this code delete is being used for removing  global object  and let and const not part of global scope cause it is block scope so it will be false while age will be true


// // const [x,y=5]=[10]
// // console.log(x+y)

// // p="ponga Reddy"
// // console.log(p)

// // //function decalration 
// // function abc(){
// //     return "hello Java Script"
// // }
// // console.log(abc())

// // //function reference
// // let funct=function(){
// //     return "function reference"
// // }
// // console.log(funct())

// // let fun2=function named(){
// //     console.log('named function reference')
// // }
// // fun2()

// // //function reference annoymous function
// // let fun3=()=>{
// //     console.log('sri Radhey')
// // }
// // fun3()

// // //this and window
// // a="DRJ"
// // // window.a
// // // this.a

// // let data={
// //     a:1,
// //     decode:function ans(){
// //         console.log(this.a)
// //     }


// // }
// // data.decode.call(data)
// // //in call we can access the object and function seperate values by using this.

// // let data2={
// //     name:"Alice",
// //     greet:function(greeting){
// //         console.log(`${greeting} ${this.name}`)
// //     }
// // }
// // let greeting="HEllo"
// // let res=data2.greet.bind(data2,greeting)
// // res()
// // //bind creates a new function it does not call the function immedeately but but return new function to invoke later.



// 'use strict'
// var GetA=function(a){
//     return a

// }
// let a=23
// console.log(GetA(a))

// let getA=(a)=>{
//     return a*a
// }
// let v=2
// console.log(getA(v)) 


// let object={
//     a: 23,
//     res:()=>{
//         console.log(this.a)//answer will be undefined because it is not refer to object it showing lexically bound with global scope so it will undefined
//     }
//     // res2:function(){
//     //     console.log(this.a)//this will perfectly work refer to the object and can be access through the this command
//     // }
// }
// object.res.call(object)

// let ans=_=>{// so here instead of this "()" you can use "_" too but just for memory 
//     console.log("hello Jb")
// }
// ans()

// var xe=function(){
//     let that=this
//     this.val=1 // in this code you have to use that or any other name variable to access this here 
//     setTimeout(function(){
//         that.val++
//         console.log(that.val)
//     },1) 

// }
// var xx=new xe()

// var se=()=>{
//     this.val=1
//     setTimeout(()=>{
//         this.val++
//         console.log(this.val)
//     },1)
// }
// let xb=new se()


//console.log(a)
//console.log(b)
// console.log(window.a)

// const a
// a=1
// function anx(){
//     const a="Ram"
//     console.log(a)
// }
// anx()
// console.log(a)

/*
console.log("a")
console.log("b")
setTimeout(()=>console.log('c'),1000)
console.log('d')

** output will be a,b,d,c
*/


/*
console.log('a')
console.log('b')
setTimeout(()=>console.log('c'),1000)
setTimeout(()=>console.log('d'),0)
console.log('e')

** output will be "a,b,e,d,c"
*/

