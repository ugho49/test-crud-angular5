import {Component, EventEmitter, Input, Output} from '@angular/core';
import {UserService} from '../../services/user.service';
import {User} from '../../classes/user';
import {Router} from '@angular/router';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.scss']
})
export class UserDetailComponent {

  @Input() user: User;
  @Output('deleteUser') deleteUserEvent: EventEmitter<void> = new EventEmitter();

  constructor(private userService: UserService, private router: Router) { }

  deleteUser() {
    this.deleteUserEvent.emit();
  }
}
