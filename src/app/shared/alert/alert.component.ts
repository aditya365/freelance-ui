import { Component, OnInit, Injectable, Input } from '@angular/core';
import { MatSnackBar } from '@angular/material';
import { AlertService } from 'src/app/services/alert/alert.service';


@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.scss'],
  providers: [AlertService]
})
export class AlertComponent implements OnInit {
  constructor(private snackBar: MatSnackBar) { }

  ngOnInit() {
  }
  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, {
      duration: 5000,
    });
  }
}
