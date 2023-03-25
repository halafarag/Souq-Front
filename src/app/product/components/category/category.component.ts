import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/shared/models/product';
import { CategoryService } from 'src/app/shared/services/category.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss'],
})
export class CategoryComponent implements OnInit {
  prdList: Product[] = [];
  constructor(
    private catService: CategoryService,
    private activeRoute: ActivatedRoute
  ) {}
  getAllPrdForCat() {
    const catID = this.activeRoute.snapshot.paramMap.get('id');
    this.catService.getAllProdForCategory(catID || '').subscribe((data) => {
      this.prdList = data;
      console.log(data);
    });
    console.log(catID);
  }
  ngOnInit(): void {
    this.getAllPrdForCat();
  }
}
