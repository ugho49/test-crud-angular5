import { Component, OnInit } from '@angular/core';
import {UserService} from '../../services/user.service';
import {User} from '../../classes/user';
import {ActivatedRoute, ParamMap} from '@angular/router';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.scss']
})
export class UserDetailComponent implements OnInit {

  user: User;

  constructor(private userService: UserService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.paramMap.subscribe((params: ParamMap) => {
      const idUser = +params.get('idUser');
      this.userService.getUser(idUser).subscribe(
        res => {
          this.user = res;
        },
        err => {
          console.error(err);
        }
      );
    });
  }

  editUser() {
    console.log("edit user");
  }

  deleteUser() {
    console.log("delete user");
  }
}
