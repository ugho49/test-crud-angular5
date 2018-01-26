import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Todo} from '../classes/todo';

@Injectable()
export class TodoService {

  constructor(private http: HttpClient) { }

  getTodos() {
    return this.http.get<Todo[]>('/api/todos');
  }

}
