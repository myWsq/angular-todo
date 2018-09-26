import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Page0Component } from './page0/page0.component';
import { Page1Component } from './page1/page1.component';
import { Page2Component } from './page2/page2.component';
import { Page3Component } from './page3/page3.component';
import { Page4Component } from './page4/page4.component';
import { SwiperComponent } from './swiper.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations:  [SwiperComponent, Page0Component, Page1Component, Page2Component, Page3Component, Page4Component],
  exports: [SwiperComponent],
})
export class SwiperModule { }
