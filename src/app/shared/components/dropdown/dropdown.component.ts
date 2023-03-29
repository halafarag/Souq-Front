import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.scss'],
})
export class DropdownComponent implements OnInit {
  token: string = '';

  ngOnInit(): void {
    this.token = localStorage.getItem('accessToken')!;
  }
}
