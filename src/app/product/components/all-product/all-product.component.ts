import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from 'src/app/shared/models/product';
import Swal from 'sweetalert2';
import { ProductService } from '../../services/product.service';
import { CartService } from 'src/app/cart/services/cart.service';

@Component({
  selector: 'app-all-product',
  templateUrl: './all-product.component.html',
  styleUrls: ['./all-product.component.scss'],
})
export class AllProductComponent implements OnInit {
  prdList: Product[] = [];
  cartList: any[] = [];
  favList: any[] = [];
  addedToFav: boolean = false;
  selectedPage: number = 1;
  prd: any;
  p: number = 1;
  public searchInput: string = '';
  constructor(
    private prdSrvice: ProductService,
    private router: Router,
    private cartService: CartService
  ) {
    for (let i = 1; i <= 100; i++) {
      this.prdList.push();
    }
  }
  getAllPrds() {
    this.prdSrvice.getAllProducts().subscribe((data) => {
      this.prdList = data;
      // console.log(data);
      // console.log(this.selectedPage);
    });
  }
  prdDetails(prdId: string) {
    this.router.navigate([`details/${prdId}`]);
    window.scrollTo(0, 0);
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
    this.getAllPrds();
  }
}
