import { Component, OnInit } from '@angular/core';
import { UserService } from '../../service/user.service';
import { User, UserActionType, UserSetAction } from '../../store/user';
import { Store } from '@ngrx/store';
import { AppState } from '../../store';

@Component({
    selector: 'app-super-admin',
    templateUrl: './super-admin.component.html',
    styleUrls: ['./super-admin.component.less']
})
export class SuperAdminComponent implements OnInit {
    /** 全部的用户列表 */
    users: User[];

    constructor(
        private userService: UserService,
        private store: Store<AppState>
    ) { }

    onSignTo(user: User) {
        this.userService.signTo(user.username).subscribe(res => {
            console.log(res);
            if (res.success) {
                this.store.dispatch(new UserSetAction(res.data));
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
