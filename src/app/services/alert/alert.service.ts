import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material';

@Injectable({
  providedIn: 'root'
})
export class AlertService {

  constructor(private snackBar: MatSnackBar) { }
  alert(message: string, action: string) {
    console.log("You are calling alert in Service" + message, action)
    this.snackBar.open(message, action, {
      duration: 5000
    })
    // this.alertIt.openSnackBar('Welcome to the world', 'Close!');
  }
}
