import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { Role } from 'src/app/core/models/role.model';
import { ValidationService } from 'src/app/services/auth/validation.service';
import { ISignUp } from '../signup.model';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  signUpForm: FormGroup;
  signUpDetails: ISignUp = {
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
    private authService: AuthService
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
    this.authService.signUp(this.signUpForm.value);
  }
  getErrorMessage() {

  }
  onConfirmPasswordChange() {
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
