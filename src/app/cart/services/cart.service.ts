import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, ReplaySubject } from 'rxjs';
import { Cart } from '../models/cart';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private cartCount = new ReplaySubject<number>(1);
  cartCount$ = this.cartCount.asObservable();
  url = `https://souq-back-end.vercel.app`;
  // url = `http://localhost:5000`;
  constructor(private http: HttpClient) {}
  addToCart(model: any): Observable<any> {
    return this.http.post<any>(`${this.url}/cart`, model);
  }
  setCartCount(count: number) {
    // encapsulate with logic to set local storage
    localStorage.setItem('cart_count', JSON.stringify(count));
    this.cartCount.next(count);
  }
}
