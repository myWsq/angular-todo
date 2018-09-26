import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';


@Component({
  selector: 'app-marked',
  templateUrl: './marked.component.html',
  styleUrls: ['./marked.component.less']
})
export class MarkedComponent implements OnInit {
  @ViewChild('ref') ref: ElementRef<Element>;
  constructor() { }

  ngOnInit() {
      console.log(this.ref.nativeElement.innerHTML);
  }
}
