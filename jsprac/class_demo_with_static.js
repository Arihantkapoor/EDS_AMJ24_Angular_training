class Person{

    constructor(firstName, lastName, age){
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }

    sample(){
        return "simple method";
    }

    get fullName(){
        return `${this.firstName} ${this.lastName}`;
        // return this.firstName + this.lastName;
    }

    set fullName(fullname){
       const[ln,fn] =  fullname.split(" ");
       this.firstName = fn;
       this.lastName = ln;
    }

    static info(){
        return "this is a static method";
    }

    static demo = "static property";
}

let obj = new Person("Ken","Thompson", 30); 
console.log(obj.sample());
// console.log(obj.fullName());
console.log(obj.fullName);

obj.fullName = "Dennis Ritchie";

console.log(obj.fullName);

console.log(Person.info());