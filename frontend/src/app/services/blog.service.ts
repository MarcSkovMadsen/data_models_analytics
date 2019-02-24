import { Injectable } from '@angular/core';
import { Observable, of, from } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Post } from './blog'
import { toObservable } from '@angular/forms/src/validators';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class BlogService {
  postUrlBase = "http://127.0.0.1:8000/api/v1/blog/posts/"

  constructor(private http: HttpClient) { }

  getPost(id: number): Observable<Post> {
    return this.http.get<Post>(this.postUrlBase + id + "/")
  }

  /** PUT: update the post on the server */
  updatePost(post: Post): Observable<Post> {
    return this.http.put<Post>(post.url, post, httpOptions);
  }
  /** POST: add a post on the server */
  addPost(post: Post): Observable<Post> {
    return this.http.post<Post>(this.postUrlBase, post, httpOptions);
  }

  getPosts() {
    console.log(this.http)
    return this.http.get<Post[]>(this.postUrlBase)
  }
}

