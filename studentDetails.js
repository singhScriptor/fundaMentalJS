class Student{
    static count=0;
    constructor(name,age,ph_no,marks){
        this.name=name;
        this.age=age;
        this.ph_no=ph_no;
        this.marks=marks;
        Student.increaseCount();
    }
    eligible(){
        if(this.marks>=40){
            console.log(`${this.name} age ${this.age} is eligible`);
        }
        else if(this.marks<40){
            console.log(`${this.name} age {this.age} is not eligible`);
        }
    }
    static increaseCount(){
        this.count++
    }
    static printCount(){
        console.log(this.count)
    }
}

let riya=new Student('Riya',15,9678374,45)
riya.eligible()
Student.printCount()



