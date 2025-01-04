class Employee{
    constructor(name,age){
        this.name = name;
        this.age = age;
    }

    degree(){
        return `${this.name} is having a MCA degree`;
    }

    isPermanent(){
        return true;
    }
}

class developer extends Employee{

    constructor(name,age,skils){
        super(name,age);
        this.skils = skils;
    }

    skillset(){
        return `${this.name} is skills in ${this.skils}`;
    }
}

let obj = new developer("John",25,"JavaScript"); 

console.log(obj.degree());
console.log(obj.isPermanent());
console.log(obj.skillset());

