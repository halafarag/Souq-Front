import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/shared/models/product';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-all-product',
  templateUrl: './all-product.component.html',
  styleUrls: ['./all-product.component.scss'],
})
export class AllProductComponent implements OnInit {
  prdList: Product[] = [];
  selectedPage: number = 1;
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
      // console.log(data);
      // console.log(this.selectedPage);
    });
  }

  ngOnInit(): void {
    this.getAllPrds();
  }
}
