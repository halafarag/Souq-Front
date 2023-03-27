import { Component, OnInit } from '@angular/core';
import { CategoryService } from 'src/app/shared/services/category.service';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
})
export class CartComponent implements OnInit {
  cartList: any[] = [];
  total: number = 0;
  constructor(private cartService: CartService) {}
  getCartFromLocalStorge() {
    if ('cart' in localStorage) {
      this.cartList = JSON.parse(localStorage.getItem('cart')!);
      // console.log(this.cartList);
    }
    this.getCartTotal();
  }
  getCartTotal() {
    this.total = 0;
    //كل ما تعدي علي عنصر خد السعر بتاعه والكميه واضربهم في بعض وحطهم في التوتال
    for (let x in this.cartList) {
      this.total += this.cartList[x].prd.price * this.cartList[x].amount;
    }
  }
  deletePrd(index: number) {
    this.cartList.splice(index, 1);
    this.getCartTotal();
    localStorage.setItem('cart', JSON.stringify(this.cartList));
  }
  plusAmount(index: number) {
    this.cartList[index].amount++;
    //update total
    this.getCartTotal();
    //update localStorge
    localStorage.setItem('cart', JSON.stringify(this.cartList));
  }
  minusAmount(index: number) {
    this.cartList[index].amount--;
    this.getCartTotal();
    localStorage.setItem('cart', JSON.stringify(this.cartList));
  }
  detectChange() {
    this.getCartTotal();
    localStorage.setItem('cart', JSON.stringify(this.cartList));
  }
  addToCart() {
    const userId = localStorage.getItem('id');
    let product = this.cartList.map((prd) => {
      console.log(prd);
      return { prdId: prd.prd._id, user: prd.userId, amount: prd.amount };
    });
    console.log(product);
    let model = {
      user: product.filter((prd) => {
        prd.user;
      }),
      product: product,
    };

    this.cartService.addToCart(model).subscribe((res) => {
      alert('done');
    });

    // console.log(model);
  }
  ngOnInit(): void {
    this.getCartFromLocalStorge();
  }
}