import { Component, OnInit } from '@angular/core';
import { CategoryService } from 'src/app/shared/services/category.service';
import { CartService } from '../../services/cart.service';
import { OrderService } from '../../services/order.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
})
export class CartComponent implements OnInit {
  cartList: any[] = [];
  total: number = 0;
  constructor(
    private cartService: CartService,
    private OrderService: OrderService
  ) {}
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
    this.cartService.setCartCount(this.cartList.length);
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
  // payment
  paymentHandler: any = null;
  stripeAPIKey: any =
    'pk_test_51MswKCF4JH7vyFXTlnqNutkXQGdIh0Lqi0puBGuiuTuUt9kHcVTYZCjWDBM9rTAvmN13PrK3KufcKh6I3RjUhufG00Nrz997ZL';
  makePayment(cartList: any, total: number) {
    const paymentHandler = (<any>window).StripeCheckout.configure({
      key: this.stripeAPIKey,
      locale: 'auto',
      token: function (stripeToken: any) {
        console.log(stripeToken);

        paymentStripe(stripeToken);
        alert('Stripe token generated!');
      },
    });
    const paymentStripe = (stripeToken: any) => {
      this.OrderService.makePayment(total, stripeToken, cartList).subscribe(
        (data) => {
          console.log(data);
        }
      );
    };
    paymentHandler.open({
      name: 'Souq',
      description: 'E-commerce Angular & node js',
      amount: total * 40,
    });
  }

  invokeStripe() {
    if (!window.document.getElementById('stripe-script')) {
      const script = window.document.createElement('script');

      script.id = 'stripe-script';
      script.type = 'text/javascript';
      script.src = 'https://checkout.stripe.com/checkout.js';
      script.onload = () => {
        this.paymentHandler = (<any>window).StripeCheckout.configure({
          key: this.stripeAPIKey,
          locale: 'auto',
          token: function (stripeToken: any) {
            console.log(stripeToken);
            alert('Payment has been successfull!');
          },
        });
      };

      window.document.body.appendChild(script);
    }
  }
  ngOnInit(): void {
    this.getCartFromLocalStorge();
    this.invokeStripe();
  }
}
