import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Category } from '../../models/category';
import { CategoryService } from '../../services/category.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent implements OnInit {
  catList: Category[] = [];
  constructor(public router: Router, private catService: CategoryService) {}
  getAllCategory() {
    this.catService.getAllCategory().subscribe((data) => {
      this.catList = data;
      // console.log(data);
    });
  }
  ngOnInit(): void {
    this.getAllCategory();
  }
}
