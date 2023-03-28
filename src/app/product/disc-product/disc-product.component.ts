import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/shared/models/product';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-disc-product',
  templateUrl: './disc-product.component.html',
  styleUrls: ['./disc-product.component.scss'],
})
export class DiscProductComponent implements OnInit {
  prdList: Product[] = [];
  prd: any;
  p: number = 1;
  constructor(private prdSrvice: ProductService) {
    for (let i = 1; i <= 100; i++) {
      this.prdList.push();
    }
  }
  getAllPrds() {
    this.prdSrvice.getAllProducts().subscribe((data) => {
      this.prdList = data;
      console.log(data);
    });
  }

  ngOnInit(): void {
    this.getAllPrds();
  }
}
