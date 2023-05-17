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
import { LoaderComponent } from './components/loader/loader.component';
import { WishListComponent } from './components/wish-list/wish-list.component';
import { FormsModule } from '@angular/forms';
import { Ng2SearchPipeModule } from 'ng2-search-filter';

@NgModule({
  declarations: [
    DetailsComponent,
    SubcategoryComponent,
    CategoryComponent,
    AllProductComponent,
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
    Ng2SearchPipeModule,
  ],
  exports: [
    DetailsComponent,
    SubcategoryComponent,
    CategoryComponent,
    AllProductComponent,
    LoaderComponent,
    WishListComponent,
  ],
})
export class ProductModule {}
