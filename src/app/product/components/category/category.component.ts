import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Category } from 'src/app/shared/models/category';
import { Product } from 'src/app/shared/models/product';
import { CategoryService } from 'src/app/shared/services/category.service';
import Swal from 'sweetalert2';
import { Cart } from '../../models/cart';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss'],
})
export class CategoryComponent implements OnInit {
  prdList: Product[] = [];
  catList: Category[] = [];
  cartList: any[] = [];
  amount: number = 1;

  constructor(
    private catService: CategoryService,
    private activeRoute: ActivatedRoute,
    private router: Router
  ) {}
  getAllPrdForCat() {
    const catID = this.activeRoute.snapshot.paramMap.get('id');
    this.catService.getAllProdForCategory(catID || '').subscribe((data) => {
      this.prdList = data;
      console.log(this.prdList[0].category?.name);
    });
  }
  prdDetails(prdId: string) {
    this.router.navigate([`details/${prdId}`]);
    window.scrollTo(0, 0);
  }
  //
  sort(event: any) {
    switch (event.target.value) {
      case 'Low': {
        this.prdList = this.prdList.sort(
          (low: any, high: any) => low.price - high.price
        );
        break;
      }
      case 'High': {
        this.prdList = this.prdList.sort(
          (low: any, high: any) => high.price - low.price
        );
        break;
      }
      case 'Name': {
        this.prdList = this.prdList.sort(function (low: any, high: any) {
          if (low.name < high.name) {
            return -1;
          } else if (low.name > high.name) {
            return 1;
          } else {
            return 0;
          }
        });
        break;
      }
      default: {
        this.prdList = this.prdList.sort(
          (low: any, high: any) => low.price - high.price
        );
        break;
      }
    }
    return this.prdList;
  }
  //
  getAllCategory() {
    this.catService.getAllCategory().subscribe((data) => {
      this.catList = data;
    });
  }

  addToLocalStorge(prd: any, amount = 1) {
    const userId = localStorage.getItem('id')!;
    if (userId) {
      if ('cart' in localStorage) {
        this.cartList = JSON.parse(localStorage.getItem('cart')!);
        const existProduct = this.cartList.find(
          (item) => item.prd._id == prd._id
        );
        if (existProduct) {
          Swal.fire('This Product is already in your cart');
        } else {
          this.cartList.push({ prd, userId, amount });
          localStorage.setItem('cart', JSON.stringify(this.cartList));
        }
      } else {
        this.cartList.push({ prd, userId, amount });
        localStorage.setItem('cart', JSON.stringify(this.cartList));
      }
    } else {
      Swal.fire({
        icon: 'error',
        text: 'You must login first',
      });
    }
    localStorage.setItem('cart', JSON.stringify(this.cartList));
    Swal.fire({
      position: 'top-end',
      icon: 'success',
      title: 'Product add to localStorge',
      showConfirmButton: false,
      timer: 1500,
    });
  }
  ngOnInit(): void {
    this.getAllPrdForCat();
    this.getAllCategory();
  }
}
