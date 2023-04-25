import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class OrderService {
  url = `https://souq-back-end.vercel.app`;
  constructor(private http: HttpClient) {}
  makePayment(total: number, stripeToken: any, cartList: any): Observable<any> {
    const url = `${this.url}/orders`;
    return this.http.post<any>(url, {
      token: stripeToken,
      total: total,
      cartList: cartList,
    });
  }
}
