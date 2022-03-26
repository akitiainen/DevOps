import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {AuthService} from "./auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;

  constructor(fb: FormBuilder, private authService: AuthService, private router: Router) {
    this.loginForm = fb.group({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required])
    })
  }

  ngOnInit(): void {
  }

  login(): void {
    if (this.loginForm.invalid) {
      return;
    }

    let email = this.loginForm.get('email')?.value;
    let password = this.loginForm.get('password')?.value;

    console.log('ÖOLL')

    this.authService.login(email, password).subscribe(() => {
      // go to home page
      this.router.navigate(['form'])
    });
  }

}
