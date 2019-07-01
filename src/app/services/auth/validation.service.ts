import { Injectable } from '@angular/core';
import { AbstractControl, FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { ValidateEmailService } from './validate-email.service';
import { map, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ValidationService {

  constructor(private validationService: ValidateEmailService) { }

  matchPassword = (control: AbstractControl): { [key: string]: boolean } => {
    let password = control.get('password');
    let confirmPassword = control.get('cPassword');
    return password.value === confirmPassword.value ? null : { 'mismatchedPasswords' : true};
  }
  checkEmailAvailablity = (control: FormControl): Observable<any> => {
    return this.validationService.checkEmailStatus(control.value).pipe(
      map(isTaken => (isTaken ? { emailTaken: true} : null)),
      catchError(() => null)
    );
  }
}
