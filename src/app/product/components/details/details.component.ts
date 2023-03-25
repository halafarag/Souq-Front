import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/shared/models/product';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss'],
})
export class DetailsComponent implements OnInit {
  prd: Product = {} as Product;
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
  ngOnInit(): void {
    this.getProductByID();
  }
}
