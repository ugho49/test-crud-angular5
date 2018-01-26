import { Component, OnInit } from '@angular/core';
import {UserService} from '../../services/user.service';
import {User} from '../../classes/user';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  users: User[] = [];
  selectedUserId: number;

  constructor(private userService: UserService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.userService.getUsers().subscribe(
      res => {
        this.users = res;
      },
      err => {
        console.error(err);
      }
    );

    if (this.route.firstChild.firstChild) {
      this.route.firstChild.firstChild.paramMap.subscribe((params: ParamMap) => {
        if (params) {
          this.selectedUserId = +params.get('idUser');
        }
      });
    }
  }

  showDetail(user: User) {
    this.selectedUserId = user.id;
    this.router.navigate(['/users/detail', user.id]);
  }

  addUser() {
    this.selectedUserId = null;
    this.router.navigate(['/users/create']);
  }

}
