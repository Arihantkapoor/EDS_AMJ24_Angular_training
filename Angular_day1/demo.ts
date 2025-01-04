class Animal{
    name: string;
    constructor(name: string){
        this.name = name;
    }
}

class tiger extends Animal{
    roar(){
        console.log("${this.name} is roaring");
    }
}

const mytiger = new tiger("Shera");
mytiger.roar();


Promise