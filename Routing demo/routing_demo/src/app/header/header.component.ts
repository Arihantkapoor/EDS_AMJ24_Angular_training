import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    this.activatedRoute.fragment.subscribe(data=>{
      this.jumpToFragment(data);
    }
  )
  }
  

  activatedRoute: ActivatedRoute = inject(ActivatedRoute);
  
  jumpToFragment(section:any){
    document.getElementById(section)?.scrollIntoView({
      behavior: 'smooth'
    })
  }

}
