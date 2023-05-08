import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PromotionAdsService {
  adsList: any;
  constructor() {
    this.adsList = [
      {
        string:
          'Sale just got better in store & online Up to 70% off in Clothes Category',
        img: 'https://img.freepik.com/free-vector/promotion-fashion-banner_1188-161.jpg',
      },
      {
        string: 'white friday offers',
        img: 'https://img.freepik.com/free-vector/gradient-furniture-sale-landing-page-template-with-photo_23-2148939514.jpg',
      },
      {
        string: '70% sales ',
        img: 'https://img.freepik.com/free-vector/promotion-fashion-banner_1188-223.jpg?w=2000',
      },
      {
        string: '50% sales on Beauty Category ',
        img: 'https://storage.googleapis.com/download/storage/v1/b/adoric-template/o/79b2066f-c2f9-47ca-81b6-ac8370601509.gif?generation=1615128065265601&alt=media',
      },
      // '',
    ];
  }
  getAds(numberOfSeconds: number): Observable<any[]> {
    //creat object from observable
    return new Observable<any[]>((observer) => {
      let counter = 0;
      let adsTimer = setInterval(() => {
        //complete
        if (counter == this.adsList.length) {
          observer.complete();
        }
        //error
        if (this.adsList[counter] == '') {
          observer.error('Empty Ad');
        }
        //success
        observer.next(this.adsList[counter]);
        counter++;
      }, numberOfSeconds * 1000);
      return {
        //make  unsubscribe in 3 cases
        //error , complete , unsubscribe
        unsubscribe() {
          clearInterval(adsTimer);
          console.log('observable is unsubscribe');
        },
      };
    });
  }
}
