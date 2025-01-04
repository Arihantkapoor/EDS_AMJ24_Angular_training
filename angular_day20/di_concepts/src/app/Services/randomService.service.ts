import { Inject, Injectable } from "@angular/core";

@Injectable({
    providedIn:"root"
})
export class RandomService{

     num:number;
    constructor(){
        console.log('Random service loaded');

       this.num =  Math.floor(Math.random() * 1000 + 1);
    }

    get getRandomNumber(){
        return this.num;
    }
}