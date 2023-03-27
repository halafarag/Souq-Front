import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/shared/models/product';
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
  addToCart(prdId: string, amount: number) {
    const userId = localStorage.getItem('id')!;
    if ('cart' in localStorage) {
      this.cartList = JSON.parse(localStorage.getItem('cart')!);
      const existProduct = this.cartList.find(
        (item) => item.productId == prdId
      );
      console.log(this.cartList);
      if (existProduct) {
        alert('this product is already in your cart');
      } else {
        this.cartList.push({ prdId, amount, userId });
        localStorage.setItem('cart', JSON.stringify(this.cartList));
      }
    } else {
      this.cartList.push({ prdId, amount, userId });
      localStorage.setItem('cart', JSON.stringify(this.cartList));
    }
    console.log(amount);
  }
  getCartTotal() {
    this.total = 0;
    //كل ما تعدي علي عنصر خد السعر بتاعه والكميه واضربهم في بعض وحطهم في التوتال
    for (let x in this.cartList) {
      this.total += this.cartList[x].prd.price * this.cartList[x].amount;
    }
  }
  plusAmount(id: string) {
    this.cartList.find((item) => {
      item.id.amount++;
    });
    //update total
    this.getCartTotal();
    //update localStorge
    localStorage.setItem('cart', JSON.stringify(this.cartList));
  }
  minusAmount(id: string) {
    this.cartList.find((item) => {
      item.id.amount--;
    });
    this.getCartTotal();
    localStorage.setItem('cart', JSON.stringify(this.cartList));
  }
  detectChange() {
    this.getCartTotal();
    localStorage.setItem('cart', JSON.stringify(this.cartList));
  }

  ngOnInit(): void {
    this.getProductByID();
  }
}
