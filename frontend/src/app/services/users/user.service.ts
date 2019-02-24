import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from './user'
@Injectable()
export class UserService {
  postUrlBase = "http://127.0.0.1:8000/api/v1/rest-auth/login/"
  constructor(private http: HttpClient) { }

  loginUser(user: User): Observable<User> {
    return this.http.post<User>(this.postUrlBase, user);
  }
}
