import { Component, OnInit } from '@angular/core';
import { UserService } from '../../service/user.service';
import { User } from '../../store/user';

@Component({
  selector: 'app-super-admin',
  templateUrl: './super-admin.component.html',
  styleUrls: ['./super-admin.component.less']
})
export class SuperAdminComponent implements OnInit {
  /** 全部的用户列表 */
  users: User[];

  constructor(
    private userService: UserService
  ) { }

  ngOnInit() {
    /** 获取用户列表 */
    this.userService.getAllUser().subscribe(users => {
      this.users = users;
    });
  }

}
