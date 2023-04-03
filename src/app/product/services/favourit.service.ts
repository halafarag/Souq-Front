import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Favourit } from '../models/favourit';

@Injectable({
  providedIn: 'root',
})
export class FavouritService {
  private httpOPtions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      token: localStorage.getItem('accessToken')!,
    }),
  };
  url = `http://localhost:5000`;
  constructor(private http: HttpClient) {}
  addToFav(model: any): Observable<any> {
    return this.http.post<Favourit>(`${this.url}/favs`, model);
  }
  removeFav(favId: string) {
    return this.http.delete(`${this.url}/favs/${favId}`);
  }
  getFav(): Observable<any> {
    return this.http.get(`${this.url}/favs`);
  }
}
