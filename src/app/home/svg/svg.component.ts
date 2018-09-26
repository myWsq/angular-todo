import { Component, OnInit, ViewChild, AfterViewInit, ElementRef, } from '@angular/core';

import * as SVG from 'svg.js';
import { interval, Subscription , fromEvent } from 'rxjs';
import { take, map } from 'rxjs/operators';
@Component({
  selector: 'app-home-svg',
  templateUrl: './svg.component.html',
  styleUrls: ['./svg.component.less']
})
export class SvgComponent implements OnInit, AfterViewInit {
  s: SVG.Doc;
  textList: {
    [key: string]: SVG.Text
  } = {};

  @ViewChild('snap') snap: ElementRef;
  constructor() { }
  ngOnInit() {
  }
  ngAfterViewInit() {
    setTimeout(() => {
      this.s = SVG(this.snap.nativeElement.id).size(500, 500).addClass('border');
      const hello = this.s.text('点击重播');
      let s1: SVG.Stop;
      const fontColor = '#51b882';
      const linear = this.s.gradient('linear', function(stop) {
        stop.at(0, fontColor);
        s1 = stop.at(0, fontColor, 0);
      });

      hello.fill(linear).size(40);
      this.s.add(hello);

      let playing: Subscription;

      const play = () => {
        if (playing) {
          playing.unsubscribe();
          playing = undefined;
        }
        playing = interval(16.7).pipe(take(200), map(x => (x + 1) / 100)).subscribe(
          next => {
            s1.update(next, fontColor , next > 1 ? next - 1 : 0);
          }
        );
      };

      play();

      hello.click(() => {
        play();
      });

    }, 0);
  }
}
