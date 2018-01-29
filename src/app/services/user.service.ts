import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {User} from '../classes/user';

@Injectable()
export class UserService {

  constructor(private http: HttpClient) { }

  getUsers() {
    return this.http.get<User[]>('/api/users');
  }

  getUser(userId: number) {
    return this.http.get<User>('/api/users/' + userId);
  }

  addUser(user: User) {
    return this.http.post('/api/users', user);
  }

  updateUser(user: User) {
    return this.http.put('/api/users/' + user.id, user);
  }

  deleteUser(userId: number) {
    return this.http.delete('/api/users/' + userId);
  }
}
