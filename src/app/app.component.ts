import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { AppState } from '../store';
import { AppService } from './app.service';
import { UserSetAction, UserState } from '../store/user';
import { Router } from '@angular/router';
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
        private router: Router
    ) { }
    ngOnInit() {
        /** 检查当前登陆的用户 */
        this.app.me().subscribe((res: MyResponse) => {
            if (res.success) {
                this.store.dispatch(new UserSetAction(res.data));
            }
        });

        /** 当前用户出现变化后自动跳转 */
        this.store.pipe<UserState>(select('user')).subscribe(user => {
            if (user) {
                this.router.navigateByUrl(this.app.getRedirectUrl(user));
            }
        });

    }
}
