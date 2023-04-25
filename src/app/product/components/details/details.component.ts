import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/shared/models/product';
import Swal from 'sweetalert2';
import { Cart } from '../../models/cart';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss'],
})
export class DetailsComponent implements OnInit {
  prd: Product = {} as Product;
  cartList: any[] = [];
  favList: any[] = [];
  addedToFav: boolean = false;
  amount: number = 0;
  total: any = 0;
  constructor(
    private prdService: ProductService,
    private activaRoute: ActivatedRoute
  ) {}
  getProductByID() {
    const PrdID = this.activaRoute.snapshot.paramMap.get('id');
    this.prdService.getPrdByID(PrdID || '').subscribe((data) => {
      this.prd = data;
      console.log(data);
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
      }
    } else {
      this.addedToFav = true;
      this.favList.push({ prd, userId });
      localStorage.setItem('favourite', JSON.stringify(this.favList));
    }
  }

  ngOnInit(): void {
    this.getProductByID();
  }
}
