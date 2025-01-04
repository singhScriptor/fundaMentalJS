//function y(){
//     //in for loop we have used blocked scope let which have created new unique i 
//     for(let i=1;i<=5;i++){
//         setTimeout(()=>{
//             console.log(i)
//         },i*3000)
//     }
//     console.log("Hello World")
// }
// y()

// function z(){
//     //var is a global scope which wroking as function scope here and i will be same for each iteration.
//     for(var i=1;i<=5;i++){
//         setTimeout(()=>{
//             console.log(i)
//         },1000)
       
//     }
//     console.log('Hey There!')
// }
// z()

//using closure
function x(){
    for(var i=1;i<=5;i++){
        function v(x){
            setTimeout(()=>{
                console.log(x)
            },x*3000)
        } 
        v(i)
    }
    console.log("Hello There")
}
x()

