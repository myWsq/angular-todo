import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AppService } from '../app.service';
import { Store, select } from '@ngrx/store';
import { AppState } from '../../store';
import { UserSetAction, UserState } from '../../store/user';
import { NavService } from '../nav/nav.service';
import { MyResponse } from '../../http-interceptors';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.less'],
  providers: [NavService]
})
export class LoginComponent implements OnInit {
  form: FormGroup;

  /** 当前登录的用户 */
  user: UserState;

  constructor(
    private appService: AppService,
    private store: Store<AppState>,
    private fb: FormBuilder,
    private router: Router
    ) { }

  /** 提交登录表单 */
  onSubmit() {
    if (this.form.valid) {
      this.appService.auth(this.form.value.username).subscribe((res: MyResponse) => {
        if (res.success) {
          const user = res.data;
          /** 登录成功设置 user state */
          this.store.dispatch(new UserSetAction(user));
          this.router.navigateByUrl(this.appService.getRedirectUrl(user));
        }
      });
    }
  }

  ngOnInit() {
    this.store.pipe(select('user')).subscribe(user => {
      this.user = user;
    });
    this.form = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

}
