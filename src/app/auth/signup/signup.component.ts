import { Component, OnInit } from '@angular/core';
import { UserSignUp } from 'src/app/models/userSignUp';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { SignupService } from 'src/app/services/auth/signup.service';
import { Router } from '@angular/router';
import { Role } from 'src/app/models/role';
import { ValidationService } from 'src/app/services/auth/validation.service';
import { ReCaptchaV3Service } from 'ng-recaptcha';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  signUpForm: FormGroup;
  signUpDetails: UserSignUp = {
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    role: ''
  };
  roles: Role[] = [
    { name: 'Poster' },
    { name: 'Developer' }
  ];
  passwordSame: boolean;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private validationService: ValidationService,
    private signUpService: SignupService
  ) { }

  ngOnInit() {
    this.signUpForm = this.formBuilder.group(
      {
        firstName: ['', [Validators.minLength(4)]],
        lastName: ['', []],
        email: ['', [Validators.email]],
        password: ['', [Validators.minLength(6)]],
        cPassword: ['', [Validators.minLength(6)]],
        role: ['', []],
        recaptcha: new FormControl(null, Validators.required)
      }, {
        validator: this.validationService.matchPassword
      });
  }
  signUp() {
    console.log("sign up");
    this.signUpDetails.firstName = this.signUpForm.controls['firstName'].value;
    this.signUpDetails.lastName = this.signUpForm.controls['lastName'].value;
    this.signUpDetails.email = this.signUpForm.controls['email'].value;
    this.signUpDetails.password = this.signUpForm.controls['password'].value;
    this.signUpDetails.role = this.signUpForm.controls['role'].value;
    this.signUpService.signUp(this.signUpDetails);
  }
  getErrorMessage() {

  }
  onConfirmPasswordChange() {
    console.log('Password and confirm are here to check' + this.signUpForm.controls['password'].value)
    const password = this.signUpForm.controls['password'].value;
    const confirmPassword = this.signUpForm.controls['cPassword'].value;
    if (password === confirmPassword) {
      this.passwordSame = true;
      return true;
    } else {
      this.passwordSame = false;
      return false;
    }
  }
}
