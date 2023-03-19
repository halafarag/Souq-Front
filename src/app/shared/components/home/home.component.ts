import { Component } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: false,
    touchDrag: false,
    pullDrag: false,
    dots: false,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1,
      },
      400: {
        items: 2,
      },
      740: {
        items: 3,
      },
      940: {
        items: 4,
      },
    },
    nav: true,
  };
  images = [
    { path: 'https://elabdfoods.com/images/thumbs/0000675_-_415.png' },
    {
      path: 'https://elabd-ecommerce-production.azurewebsites.net/images/thumbs/0000683_-_415.png',
    },
    { path: 'https://elabdfoods.com/images/thumbs/0000669_-_415.png' },
    {
      path: 'https://elabd-ecommerce-production.azurewebsites.net/images/thumbs/0000738_-_415.png',
    },
    { path: '../assets/images/5.jpeg' },
    { path: '../assets/images/6.jpeg' },
  ];
}
