import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../core/service/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  formLogin: NgForm;

  userName: string;
  password: string;

  constructor(
    private router: Router,
    private auth: AuthService
  ) { }

  ngOnInit() {
    if (this.auth.isLoggedIn) {
      this.router.navigate(['/admin']);
    }
  }

  login(form: NgForm) {
    this.auth.login().subscribe(data => {
      if (this.auth.isLoggedIn) {
        const redirect = this.auth.redirectUrl ? this.auth.redirectUrl : '/admin';

        this.router.navigate([redirect]);
      }
    });
  }

}
