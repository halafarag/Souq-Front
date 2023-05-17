import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Category } from '../models/category';
import { Product } from '../models/product';
import { Subcategory } from '../models/subcategory';

@Injectable({
  providedIn: 'root',
})
export class CategoryService {
  url = `https://souq-back-end.vercel.app`;
  // url = `http://localhost:5000`;
  constructor(private http: HttpClient) {}
  getAllCategory(): Observable<Category[]> {
    return this.http.get<Category[]>(`${this.url}/category`);
  }
  getSubCatForCategory(catID: string): Observable<Subcategory[]> {
    return this.http.get<Subcategory[]>(`${this.url}/subcat/category/${catID}`);
  }
  // /product/category/:catID
  getAllProdForCategory(catID: string): Observable<Product[]> {
    return this.http.get<Product[]>(`${this.url}/product/category/${catID}`);
  }
}
