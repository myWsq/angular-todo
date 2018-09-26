import { Component, OnInit, ViewChild } from '@angular/core';
import { SwiperComponent } from './swiper/swiper.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.less']
})
export class HomeComponent implements OnInit {
  less = `
      .loop(@count) when (@count > 0){
        .delay-@{count}{
            animation: fadeIn ease-out @delay/2 + @count * @delay * 0.1;
            // animation-delay:
        }
        .loop(@count - 1)
    }

    .loop(6);
  `;
  constructor() { }

  ngOnInit() {
  }

}
