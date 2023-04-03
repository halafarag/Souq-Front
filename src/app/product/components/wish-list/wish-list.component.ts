import { Component, OnInit } from '@angular/core';
import { FavouritService } from '../../services/favourit.service';

@Component({
  selector: 'app-wish-list',
  templateUrl: './wish-list.component.html',
  styleUrls: ['./wish-list.component.scss'],
})
export class WishListComponent implements OnInit {
  wishList: any[] = [];
  constructor(private favService: FavouritService) {}
  getFavFromLocalStorge() {
    if ('favourite' in localStorage) {
      this.wishList = JSON.parse(localStorage.getItem('favourite')!);
      console.log(this.wishList);
    }
  }

  deletePrd(index: number) {
    this.wishList.splice(index, 1);
    localStorage.setItem('favourite', JSON.stringify(this.wishList));
  }

  detectChange() {
    localStorage.setItem('favourite', JSON.stringify(this.wishList));
  }
  addToFav() {
    const userId = localStorage.getItem('id');
    let product = this.wishList.map((prd) => {
      return { product: prd.prd._id, user: prd.userId };
    });
    console.log(product);
    let model = {
      user: product.filter((prd) => {
        prd.user;
      }),
      product: product,
    };

    this.favService.addToFav(model).subscribe((res) => {
      alert('done');
    });
  }
  ngOnInit(): void {
    this.getFavFromLocalStorge();
  }
}
