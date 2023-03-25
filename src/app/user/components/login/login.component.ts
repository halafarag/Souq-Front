import { Component } from '@angular/core';
import { UserService } from '../../services/user.service';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  Validators,
} from '@angular/forms';
import { User } from '../../models/user';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  newUser: any;
  constructor(
    private userService: UserService,
    private fb: FormBuilder,
    private router: Router
  ) {}
  loginForm = this.fb.group({
    moblieNum: ['', [Validators.required]],
    password: ['', [Validators.required]],
  });

  onSubmit() {
    this.newUser = this.loginForm.value;
    console.log(this.loginForm.value);
    this.userService.login(this.newUser).subscribe((data) => {
      this.newUser = data;
      localStorage.setItem('moblieNum', this.newUser.moblieNum);
      localStorage.setItem('accessToken', this.newUser.accessToken);
      localStorage.setItem('id', this.newUser._id);
      Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'login successfully',
        showConfirmButton: false,
        timer: 1500,
      });
      this.router.navigate(['']);
      window.scrollTo(0, 0);
    });
  }
}
