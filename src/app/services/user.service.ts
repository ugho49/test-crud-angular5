import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {User} from '../classes/user';

@Injectable()
export class UserService {

  constructor(private http: HttpClient) { }

  getUsers() {
    return this.http.get<User[]>('/api/users');
  }
}
