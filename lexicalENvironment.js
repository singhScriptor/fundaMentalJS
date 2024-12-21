function a(){
    var b=10
    c()
    function c(){
        console.log(b)//will give output 10
    }
}
a()
//console.log(b)//will give reference error not defined


function outerfunction() {

    console.log(a);//this will be undefined
    var a = 10;//now variable is defined
    innerfunction();
    function innerfunction() {
        console.log(a); //it will  be 10
        console.log(window.a);//as we know window is global it will take value from main function so output is 7
        console.log(this.a)//this is also global so it  will also take value from main function so output is 7
    }
}
var a = 7;
var b =3
outerfunction();