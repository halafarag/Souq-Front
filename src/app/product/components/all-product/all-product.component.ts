import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from 'src/app/shared/models/product';
import Swal from 'sweetalert2';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-all-product',
  templateUrl: './all-product.component.html',
  styleUrls: ['./all-product.component.scss'],
})
export class AllProductComponent implements OnInit {
  prdList: Product[] = [];
  cartList: any[] = [];
  selectedPage: number = 1;
  prd: any;
  p: number = 1;
  public searchInput: string = '';
  constructor(private prdSrvice: ProductService, private router: Router) {
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
    Swal.fire({
      position: 'top-end',
      icon: 'success',
      title: 'Product add to localStorge',
      showConfirmButton: false,
      timer: 1500,
    });
  }

  ngOnInit(): void {
    this.getAllPrds();
  }
}
