//CLASS

/*
A class is a blueprint of creating object in javascript,used for object oriented programming in javascript
*/



class CLass{
    constructor(name){
        this.name = name;
    }
    getName(){
        console.log(this.name);
    }
}
let obj = new CLass('Amit');
obj.getName();