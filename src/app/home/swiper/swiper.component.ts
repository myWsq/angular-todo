import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { fadeIn, fadeOut } from '../../../animations/fade';


@Component({
  selector: 'app-home-swiper',
  templateUrl: './swiper.component.html',
  styleUrls: ['./swiper.component.less'],
  animations: [fadeIn(200), fadeOut(200)]
})
export class SwiperComponent implements OnInit {
  total = 5;
  isVisible = false;
  curPage = 0;
  constructor() { }

  ngOnInit() {
  }

  get rangeList() {
    const tmp = [];
    for (let index = 0; index < this.total; index++) {
      tmp.push(index);
    }
    return tmp;
  }

  hide() {
    this.isVisible = false;
  }

  show() {
    this.isVisible = true;
  }

  pre() {
    if (this.curPage > 0) {
      this.curPage--;
    }
  }

  next() {
    if (this.curPage < this.total - 1) {
      this.curPage++;
    }
  }

}
