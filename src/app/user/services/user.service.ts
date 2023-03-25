import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  url = `http://localhost:5000/users`;
  constructor(private http: HttpClient) {}
  login(user: User): Observable<User> {
    return this.http.post<User>(`${this.url}/login`, user);
  }
  register(user: User): Observable<User> {
    return this.http.post<User>(`${this.url}/register`, user);
  }
}