import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../store';
import { AppService } from './app.service';
import { UserSetAction } from '../store/user';
import { MyResponse } from '../http-interceptors';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.less']
})
export class AppComponent implements OnInit {
    title = 'ngTest';
    constructor(
        private store: Store<AppState>,
        private app: AppService,
    ) { }
    ngOnInit() {
        /** 检查当前登陆的用户 */
        this.app.me().subscribe((res: MyResponse) => {
            if (res.success) {
                this.store.dispatch(new UserSetAction(res.data));
            }
        });
    }
}
