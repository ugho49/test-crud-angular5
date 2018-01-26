import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Post} from '../classes/post';
import {Comment} from '../classes/comment';

@Injectable()
export class PostService {

  constructor(private http: HttpClient) { }

  getPosts() {
    return this.http.get<Post[]>('/api/posts');
  }

  getComments(postId: number) {
    return this.http.get<Comment[]>('/api/posts/' + postId + '/comments');
  }

}
