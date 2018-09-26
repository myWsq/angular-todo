import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';

@Component({
    selector: 'app-index',
    templateUrl: './index.component.html',
    styleUrls: ['./index.component.less']
})
export class IndexComponent implements OnInit {
    p1 = require('raw-loader!./md/1.md');
    constructor(
        public appService: AppService
    ) { }

    ngOnInit() {
    }

}
