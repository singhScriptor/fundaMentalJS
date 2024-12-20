//in this code we check which line will execute first 

/* here is the answer :- 
in this code we all know variable and function declaration will be call first so when we call first variable it will
be undefined then we call function means line number 2 which call function declaration where the code is and it will store
that code so it will executue first then line number 3 will be executed then line number 4
*/

//what is javaScript?
/*
javascript is a synchronous single thread language it will only execute one command at a time on a specific order
*/

//how many environment javascript have?
/*
there are two environmnet memory (variable environment) and code (code also known as thread of execution)
*/

var number1 = 2;
var number2 = 5
function add(a, b){
    var answer = a + b; 
    return answer;
}
var sum = add(number1, number2); // line 2
console.log(sum) //line 3
console.log(answer) //line 4

// what is call stack?
/* call stack only for managing the whole context of execution in javascript
first layer will be global execution context and then function execution context then it will remove 
and then it will move for the next function.
*/

//call stack also known as:
/*
execution context stack
program stack
control stack
runtime stack
machine stack
*/