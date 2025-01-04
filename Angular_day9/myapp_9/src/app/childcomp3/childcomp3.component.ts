import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-childcomp3',
  templateUrl: './childcomp3.component.html',
  styleUrls: ['./childcomp3.component.css']
})
export class Childcomp3Component  {

  data: string = 'Child to parent through @ViewChild';
}
