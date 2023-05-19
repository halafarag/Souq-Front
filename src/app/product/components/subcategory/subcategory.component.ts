import { Component, OnChanges, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CartService } from 'src/app/cart/services/cart.service';
import { Category } from 'src/app/shared/models/category';
import { Product } from 'src/app/shared/models/product';
import { Subcategory } from 'src/app/shared/models/subcategory';
import { CategoryService } from 'src/app/shared/services/category.service';
import { SubcategoryService } from 'src/app/shared/services/subcategory.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-subcategory',
  templateUrl: './subcategory.component.html',
  styleUrls: ['./subcategory.component.scss'],
})
export class SubcategoryComponent implements OnInit, OnChanges {
  prdList: Product[] = [];
  catList: Category[] = [];
  cartList: any[] = [];
  isLoading: boolean = false;
  favList: any[] = [];
  addedToFav: boolean = false;
  searchText: string = '';
  subID!: string;
  constructor(
    private subCatService: SubcategoryService,
    private catService: CategoryService,
    private activeRoute: ActivatedRoute,
    private router: Router,
    private cartService: CartService
  ) {}
  ngOnChanges(): void {
    this.activeRoute.params.subscribe((val) => {
      this.subID = val['id'];
    });
  }
  getAllPrdForSub() {
    this.isLoading = true;

    this.subCatService
      .getAllProdForSubcat(this.subID || '')
      .subscribe((data) => {
        this.prdList = data;
        this.isLoading = false;
        console.log(data);
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
    this.cartService.setCartCount(this.cartList.length);
  }
  addToFav(prd: any) {
    // console.log(prd);
    const userId = localStorage.getItem('id')!;
    if ('favourite' in localStorage) {
      this.favList = JSON.parse(localStorage.getItem('favourite')!);
      console.log(this.favList);
      const existProduct = this.favList.find((item) => item.prd._id == prd._id);

      if (existProduct) {
        alert('this product is already in your favourite');
      } else {
        this.favList.push({ prd, userId });
        localStorage.setItem('favourite', JSON.stringify(this.favList));
        const Toast = Swal.mixin({
          toast: true,
          position: 'top-end',
          showConfirmButton: false,
          timer: 1500,
        });
        Toast.fire({
          icon: 'success',
          title: 'This Product Added To Your Favourite Successfully',
        });
      }
    } else {
      this.addedToFav = true;
      this.favList.push({ prd, userId });
      localStorage.setItem('favourite', JSON.stringify(this.favList));
    }
  }
  ngOnInit(): void {
    this.getAllPrdForSub();
    this.getAllCategory();
  }
}
