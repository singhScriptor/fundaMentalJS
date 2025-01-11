// what is a callback function in javascript?
/*
a callback function that is passed as an argument to another function  which is then executed within the outer function to complete some kind of routine or action.
or
a function passed into another function as well all know function is first class so this behavior is called  callback function.
*/


setTimeout(function() {
    console.log('timer')
},5000)

function x(y){
    console.log('x')
    y()
}
x(function(){
    console.log("Y")
})


// let btn=document.getElementById('btn')
// let count=0
// btn.addEventListener('click',function znm(){
//     console.log('Button is clicked',count++)

// })


//adding closure /* this is forming closure 
function addingCLosure(){
    let btn=document.getElementById('btn')
    let count=0
    btn.addEventListener('click',function znm(){
        console.log('Button is clicked',count++)
    })

}
addingCLosure()
