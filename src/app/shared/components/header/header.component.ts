import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/user/services/user.service';
import { Category } from '../../models/category';
import { Subcategory } from '../../models/subcategory';
import { CategoryService } from '../../services/category.service';
import { BehaviorSubject } from 'rxjs';
import { CartService } from 'src/app/cart/services/cart.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit, OnChanges {
  catList: Category[] = [];
  subList: Subcategory[] = [];
  error: string = '';
  cartList: any[] = [];
  token: string = '';
  cartCount$: any;

  constructor(
    public router: Router,
    private catService: CategoryService,
    private cartService: CartService
  ) {
    this.cartCount$ = this.cartService.cartCount$;
  }
  getCartFromLocalStorge() {
    if ('cart' in localStorage) {
      this.cartList = JSON.parse(localStorage.getItem('cart')!);
    }
  }
  getAllCategories() {
    this.catService.getAllCategory().subscribe((data) => {
      this.catList = data;
    });
  }
  getSubCatforCategory(id: string) {
    this.catService.getSubCatForCategory(id).subscribe(
      (data) => {
        this.subList = data;
        this.error = '';
        // console.log(data);
      },
      (error) => {
        this.error = JSON.stringify(error.error.error);
      }
    );
    // console.log(id);
  }
  empty() {
    this.subList = [];
  }

  ngOnInit(): void {
    this.getAllCategories();
    this.getCartFromLocalStorge();
    this.token = localStorage.getItem('accessToken')!;
  }
  ngOnChanges(changes: SimpleChanges): void {}
}
