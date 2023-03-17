import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { NgxHideOnScrollModule } from 'ngx-hide-on-scroll';
import { SliderComponent } from './components/slider/slider.component';

@NgModule({
  declarations: [HeaderComponent, NavbarComponent, SliderComponent],
  imports: [CommonModule, NgxHideOnScrollModule],
  exports: [HeaderComponent, NavbarComponent, SliderComponent],
})
export class SharedModule {}
