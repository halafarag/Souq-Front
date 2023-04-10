import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class OrderService {
  constructor(private http: HttpClient) {}
  makePayment(total: number, stripeToken: any, cartList: any): Observable<any> {
    const url = `http://localhost:5000/orders`;
    return this.http.post<any>(url, {
      token: stripeToken,
      total: total,
      cartList: cartList,
    });
  }
}
