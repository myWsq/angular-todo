import { Component, OnInit } from '@angular/core';
import { fadeIn, fadeOut } from '../../../animations/fade';
import { interval, Subscription } from 'rxjs';

@Component({
  selector: 'app-home-animation',
  templateUrl: './animation.component.html',
  styleUrls: ['./animation.component.less'],
  animations: [fadeIn(200), fadeOut(200)]
})
export class AnimationComponent implements OnInit {

  constructor() { }
  active = 'inactive';
  info = [
    {
      class: 'h1',
      text: '项目跟踪',
    },
    {
      class: 'h2',
      text: '追踪投放任务',
    },
    {
      class: 'p',
      text: '您可以实时查看营销项目的整体状态，包括每个媒介资源的投放日期与投放量设置，投放人群设置和人群分发进度，追踪营销项目的整体运营进度与投放情况。',
    }
  ];
  displayInfo = [];
  reserve = false;
  subscribe: Subscription;

  ngOnInit() {

  }

  start() {
    const ob = interval(500);
    this.subscribe = ob.subscribe(() => {
      if (!this.reserve) {
          this.displayInfo.push(this.info.shift());
      } else {
          this.info.unshift(this.displayInfo.pop());
      }
      if (!this.info.length || !this.displayInfo.length) {
        this.reserve = !this.reserve;
      }
    });
  }

  end() {
    if (this.subscribe) {
      this.subscribe.unsubscribe();
      this.subscribe = null;
    }
  }

}
