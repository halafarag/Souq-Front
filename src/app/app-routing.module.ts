import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './cart/components/cart/cart.component';
import { AllProductComponent } from './product/components/all-product/all-product.component';
import { CategoryComponent } from './product/components/category/category.component';
import { DetailsComponent } from './product/components/details/details.component';
import { SubcategoryComponent } from './product/components/subcategory/subcategory.component';
import { HomeComponent } from './shared/components/home/home.component';
import { LoginComponent } from './user/components/login/login.component';
import { RegisterComponent } from './user/components/register/register.component';
import { WishListComponent } from './product/components/wish-list/wish-list.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'details/:id', component: DetailsComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent },
  { path: 'subcat/:id', component: SubcategoryComponent },
  { path: 'cat/:id', component: CategoryComponent },
  { path: 'cart', component: CartComponent },
  { path: 'wish', component: WishListComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
