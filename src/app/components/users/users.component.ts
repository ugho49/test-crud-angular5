import {Component, OnInit} from '@angular/core';
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
  selectedUser: User;

  constructor(private userService: UserService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.userService.getUsers().subscribe(
      res => {
        this.users = res;

        this.route.paramMap.subscribe((params: ParamMap) => {
          const selectedUserId = +params.get('idUser');

          if (selectedUserId) {
            this.users.forEach(u => {
              if (u.id === selectedUserId) {
                this.selectedUser = u;
              }
            });
          }
        });
      },
      err => {
        console.error(err);
      }
    );
  }

  showDetail(user: User) {
    this.selectedUser = user;
    this.router.navigate(['/users', user.id]);
  }

  deleteUser() {
    this.userService.deleteUser(this.selectedUser.id).subscribe(
      res => {
        this.router.navigate(['/users']);
        this.users = this.users.filter(u => u.id !== this.selectedUser.id);
        this.selectedUser = null;
      },
      err => {
        console.error(err);
      }
    );
  }
}
