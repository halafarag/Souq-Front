import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DetailsComponent } from './components/details/details.component';
import { SubcategoryComponent } from './components/subcategory/subcategory.component';
import { CategoryComponent } from './components/category/category.component';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [DetailsComponent, SubcategoryComponent, CategoryComponent],
  imports: [CommonModule, BrowserModule, RouterModule, HttpClientModule],
  exports: [DetailsComponent, SubcategoryComponent, CategoryComponent],
})
export class ProductModule {}
