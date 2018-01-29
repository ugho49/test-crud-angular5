import {Component, OnInit} from '@angular/core';
import {UserService} from '../../services/user.service';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';
import {User} from '../../classes/user';

enum State {
  Adding,
  Updating
}

@Component({
  selector: 'app-user-create-modify',
  templateUrl: './user-create-modify.component.html',
  styleUrls: ['./user-create-modify.component.scss']
})
export class UserCreateModifyComponent implements OnInit {

  error = "";
  loading = false;
  state = State;
  currentState: State;
  model: User;

  constructor(private userService: UserService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.paramMap.subscribe((params: ParamMap) => {
      const idUserToUpdate = +params.get('idUser');

      if (!idUserToUpdate) {
        this.currentState = State.Adding;
        this.model = new User();
      } else {
        this.currentState = State.Updating;
        this.userService.getUser(idUserToUpdate).subscribe(
          res => {
            this.model = res;
          },
          err => {
            console.error(err);
          }
        );
      }
    });
  }

  addUser() {
    this.loading = true;
    this.error = "";

    this.userService.addUser(this.model).subscribe(
      res => {
        this.router.navigate(['/users', res['id']]);
      },
      err => {
        console.log(err);
        this.loading = false;
        this.error = "An error occured";
      }
    );
  }

  updateUser() {
    this.loading = true;
    this.error = "";

    this.userService.updateUser(this.model).subscribe(
      res => {
        this.router.navigate(['/users', res['id']]);
      },
      err => {
        console.log(err);
        this.loading = false;
        this.error = "An error occured";
      }
    );
  }
}
