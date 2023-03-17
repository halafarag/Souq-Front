import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { NgxHideOnScrollModule } from 'ngx-hide-on-scroll';

@NgModule({
  declarations: [HeaderComponent, NavbarComponent],
  imports: [CommonModule, NgxHideOnScrollModule],
  exports: [HeaderComponent, NavbarComponent],
})
export class SharedModule {}
