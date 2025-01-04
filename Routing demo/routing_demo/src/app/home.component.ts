import { Component, inject, Inject } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";

@Component({
    template:`<h1>Welcome</h1>
    <p>This is home component</p>
    <button (click)="navToContact()">Contact</button>
    Search: <input type="text" class="search-input" placeholder="Search by Name" #txtbox>
    <button class="search-button" (click)="onSubmitQueryString(txtbox.value)">Search By Name</button>
    <app-header></app-header>
    <section id="course">
        <app-course></app-course>
    </section>

    <section id="skills">
        <app-skills></app-skills>
    </section>

    `
})
export class HomeComponent{

    router:Router = inject(Router); //another way of doing DI

    activatedRoute: ActivatedRoute = inject(ActivatedRoute);

    navToContact(){
        // this.router.navigate(['Contact'],{relativeTo:this.activatedRoute});
        // this.router.navigateByUrl('Contact');

        this.router.navigate(['/Contact']);
    }

    onSubmitQueryString(val:any){
        this.router.navigate(['/User'],
        {
            queryParams:{
            search:val
        }
    })
    }
}