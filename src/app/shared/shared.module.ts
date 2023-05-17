import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { NgxHideOnScrollModule } from 'ngx-hide-on-scroll';
import { SliderComponent } from './components/slider/slider.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { ProductModule } from '../product/product.module';
import { LogoutComponent } from './components/logout/logout.component';
import { DropdownComponent } from './components/dropdown/dropdown.component';
import { FormsModule } from '@angular/forms';
<<<<<<< HEAD
=======
import { AdsComponent } from './components/ads/ads.component';
>>>>>>> a7ea73978a48cb5fd581f53c551e6f15fce44e0b

@NgModule({
  declarations: [
    HeaderComponent,
    NavbarComponent,
    SliderComponent,
    FooterComponent,
    HomeComponent,
    LogoutComponent,
    DropdownComponent,
    AdsComponent,
  ],
  imports: [
    CommonModule,
    NgxHideOnScrollModule,
    RouterModule,
    HttpClientModule,
    ProductModule,
    RouterModule,
    FormsModule,
  ],
  exports: [
    HeaderComponent,
    NavbarComponent,
    SliderComponent,
    FooterComponent,
    HomeComponent,
    LogoutComponent,
    DropdownComponent,
  ],
})
export class SharedModule {}
