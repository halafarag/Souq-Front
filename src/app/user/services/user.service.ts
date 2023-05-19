import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private httpOptions = {};
  url = `https://souq-back-end.vercel.app/users`;
  // url = `http://localhost:5000/users`;
  constructor(private http: HttpClient) {
    this.httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        accessToken: localStorage.getItem('accessToken') || '',
      }),
    };
  }
  login(user: User): Observable<User> {
    return this.http.post<User>(`${this.url}/login`, user, this.httpOptions);
  }
  register(user: User): Observable<User> {
    return this.http.post<User>(`${this.url}/register`, user);
  }
  logout(id: string) {
    return this.http.get(`${this.url}/logout/${id}`);
  }
}
