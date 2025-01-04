import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-childcomp',
  templateUrl: './childcomp.component.html',
  styleUrls: ['./childcomp.component.css']
})
export class ChildcompComponent {

  @Input() data_from_parent = '';

  @Output() childData = new EventEmitter<string>();


  childdata1 = 'Data send using template reference variable';

  data_to_parent = 'Data send using @ViewChild';

}
