import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DetailsComponent } from './components/details/details.component';
import { SubcategoryComponent } from './components/subcategory/subcategory.component';
import { CategoryComponent } from './components/category/category.component';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { AllProductComponent } from './components/all-product/all-product.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { DiscProductComponent } from './disc-product/disc-product.component';
import { LoaderComponent } from './components/loader/loader.component';
import { WishListComponent } from './components/wish-list/wish-list.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    DetailsComponent,
    SubcategoryComponent,
    CategoryComponent,
    AllProductComponent,
    DiscProductComponent,
    LoaderComponent,
    WishListComponent,
  ],
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule,
    HttpClientModule,
    NgxPaginationModule,
    FormsModule,
  ],
  exports: [
    DetailsComponent,
    SubcategoryComponent,
    CategoryComponent,
    AllProductComponent,
    DiscProductComponent,
    LoaderComponent,
    WishListComponent,
  ],
})
export class ProductModule {}
