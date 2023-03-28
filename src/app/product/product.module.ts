import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DetailsComponent } from './components/details/details.component';
import { SubcategoryComponent } from './components/subcategory/subcategory.component';
import { CategoryComponent } from './components/category/category.component';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { AllProductComponent } from './all-product/all-product.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { DiscProductComponent } from './disc-product/disc-product.component';
import { SearchComponent } from './search/search.component';

@NgModule({
  declarations: [
    DetailsComponent,
    SubcategoryComponent,
    CategoryComponent,
    AllProductComponent,
    DiscProductComponent,
    SearchComponent,
  ],
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule,
    HttpClientModule,
    NgxPaginationModule,
  ],
  exports: [
    DetailsComponent,
    SubcategoryComponent,
    CategoryComponent,
    AllProductComponent,
    DiscProductComponent,
    SearchComponent,
  ],
})
export class ProductModule {}
