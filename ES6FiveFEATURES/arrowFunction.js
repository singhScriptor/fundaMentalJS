let sum=(a,b)=>a+b
console.log(sum(10,20))//30

let greet=()=>{
    console.log('Hello')
}
greet()


/*
Arrow functions are shorter syntax for writing function expressions and also lexically bind with this value.
*/

//Example with this value
function person(age){
    this.age=age
    setInterval(()=>{
        this.age++
        console.log(this.age)
    },1000)
}
let p=new person(21)


//another example
let detail={
    name:'Amit',
    greet:function(){
        setTimeout(()=>{
            console.log(`Hello ${this.name}`)
        },1000)
    }
}
detail.greet()