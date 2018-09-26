import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { UserService } from '../../../service/user.service';
import { AppState } from '../../../store';
import { User, UserSetAction } from '../../../store/user';
import { AppService } from '../../app.service';
import { Router } from '@angular/router';

@Component({
    selector: 'app-super-admin-sign-to',
    templateUrl: './sign-to.component.html',
    styleUrls: ['./sign-to.component.less']
})
export class SignToComponent implements OnInit {
    /** 全部的用户列表 */
    users: User[];

    constructor(
        private userService: UserService,
        private store: Store<AppState>,
        private appService: AppService,
        private router: Router
    ) { }

    onSignTo(user: User) {
        this.userService.signTo(user.username).subscribe(res => {
            console.log(res);
            if (res.success) {
                this.store.dispatch(new UserSetAction(res.data));
                this.router.navigateByUrl(this.appService.getRedirectUrl(res.data));
            }
        });
    }
    ngOnInit() {
        /** 获取用户列表 */
        this.userService.getAllUser().subscribe(res => {
            if (res.success) {
                this.users = res.data;
            }
        });
    }
}
