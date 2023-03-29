import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/user/services/user.service';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.scss'],
})
export class LogoutComponent implements OnInit {
  name: string = '';
  constructor(private userServic: UserService, private router: Router) {
    this.name = localStorage.getItem('firstName')!;
  }
  logout() {
    const id = localStorage.getItem('id');
    this.userServic.logout(id || '').subscribe(() => {
      localStorage.clear();
      this.router.navigate(['']);
      location.reload();
    });
  }
  ngOnInit(): void {}
}
