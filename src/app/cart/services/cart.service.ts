import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Cart } from '../models/cart';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  constructor(private http: HttpClient) {}
  addToCart(model: any): Observable<any> {
    return this.http.post<any>(`http://localhost:5000/cart`, model);
  }
}
