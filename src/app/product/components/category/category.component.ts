import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
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
    private activeRoute: ActivatedRoute,
    private router: Router
  ) {}
  getAllPrdForCat() {
    const catID = this.activeRoute.snapshot.paramMap.get('id');

    this.catService.getAllProdForCategory(catID || '').subscribe((data) => {
      this.prdList = data;
      // this.ngOnInit();
      console.log(data);
    });
    console.log(catID);
  }
  // product details
  prdDetails(prdId: string) {
    this.router.navigate([`details/${prdId}`]);
  }
  //
  sort(event: any) {
    switch (event.target.value) {
      case 'Low': {
        this.prdList = this.prdList.sort(
          (low: any, high: any) => low.price - high.price
        );
        break;
      }

      case 'High': {
        this.prdList = this.prdList.sort(
          (low: any, high: any) => high.price - low.price
        );
        break;
      }

      case 'Name': {
        this.prdList = this.prdList.sort(function (low: any, high: any) {
          if (low.name < high.name) {
            return -1;
          } else if (low.name > high.name) {
            return 1;
          } else {
            return 0;
          }
        });
        break;
      }

      default: {
        this.prdList = this.prdList.sort(
          (low: any, high: any) => low.price - high.price
        );
        break;
      }
    }
    return this.prdList;
  }

  ngOnInit(): void {
    this.getAllPrdForCat();
  }
}
