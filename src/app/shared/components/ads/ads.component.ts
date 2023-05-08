import { Component } from '@angular/core';
import { PromotionAdsService } from '../../services/promotion-ads.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-ads',
  templateUrl: './ads.component.html',
  styleUrls: ['./ads.component.scss'],
})
export class AdsComponent {
  private subscribtion!: Subscription;
  showAds: boolean = true;
  ads: any;
  constructor(private adService: PromotionAdsService) {}

  ngOnInit(): void {
    // save obserable in variable that return obj
    this.subscribtion = this.adService.getAds(2).subscribe({
      next: (data: any) => {
        this.ads = data;
        console.log(data);
      },
      error: (err: any) => {
        console.log(err);
      },
      complete: () => {
        console.log('ads finished');
        this.showAds = false;
      },
    });
  }
  ngOnDestroy(): void {
    this.subscribtion.unsubscribe();
  }
}
