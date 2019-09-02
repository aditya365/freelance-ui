import { Component, OnInit } from '@angular/core';
import { Validators, FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { SigninService } from 'src/app/services/auth/signin.service';
import { AuthService } from '../auth.service';
import ISignin from './signin.model';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {
  signInForm: FormGroup;
  userDetail: ISignin = {
    email: '',
    password: ''
  };

  constructor(private formBuilder: FormBuilder, private router: Router
    , private authService: AuthService) { }

  ngOnInit() {
    this.signInForm = this.formBuilder.group(
      {
        email: ['', [Validators.email, Validators.required]],
        password: ['', [Validators.minLength(6)]]
      }, {
      });
  }
  signIn() {
    this.authService.signIn(this.signInForm.value);
  }
}
