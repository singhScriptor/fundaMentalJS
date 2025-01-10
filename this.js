// house

this.table = 'window table' ;
console.log(this.table)
//console.log(window.table)


//inside object within global context
this.garage = {
    table : 'garage table'
}
console.log(this.garage.table);

//inside object
let johnsRoom = {
    table : 'johns table'
}

console.log(johnsRoom.table)

// this inside a method

let mohTable={
    table : "MOH's table",
    cleanTable(){
        console.log(`Cleaning ${this.table}`)
    }
}
console.log(mohTable.table)
mohTable.cleanTable()

//within global context
this.mohT={
    table:"Moh's T",
    messTable(){
        console.log(`Messing ${this.table}`)
    }
}
console.log(this.mohT.table)
this.mohT.messTable()

//this inside a function

this.thatTable='WIndow Table'
const CleanTable=function(){

    console.log(`Cleaning Table ${this.table}`)
}
CleanTable.call(this)

//add argument and parameter

this.thatTable='WIndow Table'
const leanTable=function(m){

    console.log(`Cleaning Table ${this.table} using ${m}`)
}
leanTable.call(this,'garage')


//this inside inner function




// this inside constructor


let createRoom=function(name){
    this.table=`${name}'s table`
}

createRoom.prototype.cleanTable=function(gel){
    console.log(`cleaning ${this.table} using ${gel}`)
}
const jill=new createRoom('Jill')
console.log(jill.table)
jill.cleanTable()

//this in class




