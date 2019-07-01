import { Component, OnInit } from '@angular/core';
import { Validators, FormGroup, FormBuilder} from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/models/userLogin';
import { SigninService } from 'src/app/services/auth/signin.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {
  signInForm: FormGroup;
  userDetail: User = {
    email: '',
    password: ''
  };

  constructor(private formBuilder: FormBuilder, private router: Router
    , private signInService: SigninService) { }

  ngOnInit() {
    this.signInForm = this.formBuilder.group(
      {
        email: ['', [Validators.email, Validators.required]],
        password: ['', [Validators.minLength(6)]]
      }, {
      });
  }
  signIn() {
    this.userDetail.email = this.signInForm.controls['email'].value;
    this.userDetail.password = this.signInForm.controls['password'].value;
    console.log('User detail is' + this.userDetail);
    this.signInService.signIn(this.userDetail);
  }
  getErrorMessage() {

  }
}
