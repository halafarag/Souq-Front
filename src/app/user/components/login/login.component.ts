import { Component, OnInit } from '@angular/core';
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
export class LoginComponent implements OnInit {
  newUser: any;
  error: string = '';
  constructor(
    private userService: UserService,
    private fb: FormBuilder,
    private router: Router
  ) {}
  ngOnInit(): void {}
  loginForm = this.fb.group({
    moblieNum: ['', [Validators.required]],
    password: ['', [Validators.required]],
  });

  onSubmit() {
    this.newUser = this.loginForm.value;
    console.log(this.loginForm.value);
    if (this.loginForm.valid) {
      this.userService.login(this.newUser).subscribe(
        (data) => {
          this.newUser = data;
          localStorage.setItem('moblieNum', this.newUser.moblieNum);
          localStorage.setItem('accessToken', this.newUser.accessToken);
          localStorage.setItem('firstName', this.newUser.firstName);
          localStorage.setItem('id', this.newUser._id);
          const Toast = Swal.mixin({
            toast: true,
            position: 'top-end',
            showConfirmButton: false,
            timer: 1000,
          });
          Toast.fire({
            icon: 'success',
            title: 'logIn successfully',
          });
          this.router.navigate(['']);
          this.ngOnInit();
          window.scrollTo(0, 0);
        },
        (error) => {
          this.error = JSON.stringify(error.error);
        }
      );
    } else {
      alert('You Must Insert Correct Data');
    }
  }
}
