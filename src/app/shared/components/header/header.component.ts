import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/user/services/user.service';
import { Category } from '../../models/category';
import { Subcategory } from '../../models/subcategory';
import { CategoryService } from '../../services/category.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  catList: Category[] = [];
  subList: Subcategory[] = [];
  error: string = '';
  cartList: any[] = [];
  constructor(public router: Router, private catService: CategoryService) {}
  getCartFromLocalStorge() {
    if ('cart' in localStorage) {
      this.cartList = JSON.parse(localStorage.getItem('cart')!);
      console.log(this.cartList.length);
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
  }
}
