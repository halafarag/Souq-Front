import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../models/product';
import { Subcategory } from '../models/subcategory';

@Injectable({
  providedIn: 'root',
})
export class SubcategoryService {
  url = `http://localhost:5000`;
  constructor(private http: HttpClient) {}
  getAllSubcat(): Observable<Subcategory[]> {
    return this.http.get<Subcategory[]>(`${this.url}/subcat`);
  }
  getAllProdForSubcat(subID: string): Observable<Product[]> {
    return this.http.get<Product[]>(`${this.url}/product/subcat/${subID}`);
  }
}
