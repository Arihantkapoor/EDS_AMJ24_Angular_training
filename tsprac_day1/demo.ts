let numsarray: number[] = [1,2,3,4,5];

console.log(numsarray);

numsarray.forEach((values)=>{
    console.log(values*9);
});

let newarray = numsarray.map((values)=>{
    return values*3;
});

console.log(newarray);


let mixed:(string|number)[];
mixed = ["John","smith",1,2,3];

mixed.forEach((values)=>{
    if(typeof values=="number"){
        console.log(values*4);
    }
    else{
        console.log(values.toUpperCase());
    }
});

class Testing{
    name:string;
     age:number;

    constructor(name:string, age:number){
        this.name = name;
        this.age = age;
    }

    display(){
        console.log(this.name, this.age);
    }
}

let test = new Testing("arihant",25);

test.display();