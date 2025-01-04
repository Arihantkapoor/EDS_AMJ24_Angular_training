class Animal{
    name: string;
    species: string
    constructor(name: string,species: string){
        this.name = name;
        this.species = species;
    }
}

class lion extends Animal{
    roar(){
        console.log(' ${this.name} roars.')
    }
}

const lion1 = new lion("Arihant","Human");
lion1.roar();