import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from 'src/app/shared/models/product';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  url = `https://souq-back-end.vercel.app`;
  // url = `http://localhost:5000`;
  constructor(private http: HttpClient) {}
  getPrdByID(id: string): Observable<Product> {
    return this.http.get<Product>(`${this.url}/product/${id}`);
  }
  getAllProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(`${this.url}/product`);
  }
}
