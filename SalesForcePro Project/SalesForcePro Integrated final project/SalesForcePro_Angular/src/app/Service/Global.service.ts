import { Injectable } from "@angular/core";

@Injectable({
    providedIn: "root"
})
export class GlobalService{
    loggedin: boolean = false;

}