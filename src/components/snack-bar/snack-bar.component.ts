import { Component, OnInit } from '@angular/core';
import { fadeIn, fadeOut } from '../../animations/fade';
import { MsgItem, msgSubject } from './snack-bar.service';
import * as _ from 'lodash';
import { slideIn } from '../../animations/scale';
@Component({
    selector: 'app-snack-bar',
    templateUrl: './snack-bar.component.html',
    styleUrls: ['./snack-bar.component.less'],
    animations: [fadeIn(200), fadeOut(200), slideIn(200)]
})
export class SnackBarComponent implements OnInit {
    msgList: MsgItem[] = [];
    constructor() { }

    close(id: string) {
        _.remove(this.msgList, item => {
            return item.id === id;
        });
    }

    trackById(index, item: MsgItem) {
        return item.id;
    }

    ngOnInit() {
        msgSubject.subscribe(msg => {
            this.msgList.unshift(msg);
            /** 自动关闭消息 */
            if (msg.duration && msg.duration > 0) {
                setTimeout(() => {
                    this.close(msg.id);
                }, msg.duration);
            }
        });
    }

}
