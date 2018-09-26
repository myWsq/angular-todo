import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { AppState } from '../../store';
import { Observable } from 'rxjs';
import { UserState } from '../../store/user';

@Component({
    selector: 'app-user-info',
    templateUrl: './user-info.component.html',
    styleUrls: ['./user-info.component.less']
})
export class UserInfoComponent implements OnInit {
    userObservable: Observable<UserState>;
    user: UserState;
    constructor(private store: Store<AppState>) {
        this.userObservable = store.pipe(select('user'));
    }

    ngOnInit() {
        /** 订阅当前用户的变化 */
        this.userObservable.subscribe(user => {
            this.user = user;
        });
    }

}
