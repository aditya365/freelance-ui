import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, ReactiveFormsModule } from '@angular/forms';

import { User } from 'src/app/core/models/user-login.model';

import { HttpHeaders } from '@angular/common/http';
import { Http } from '@angular/http';
import { environment } from 'src/environments/environment';
import { MailService } from '../mail.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-compose',
  templateUrl: './compose.component.html',
  styleUrls: ['./compose.component.scss']
})
export class ComposeComponent implements OnInit {
  mailForm: any;
  constructor(private http: Http, private mailService: MailService,
    private router: Router) { }

  ngOnInit() {
    this.mailForm = new FormGroup({
      body: new FormControl("", [Validators.required]),
      to: new FormControl("", [Validators.required]),
      subject: new FormControl("", [Validators.required])
    })

  }
  on_submit() {
    var user = localStorage.getItem('user');
    this.mailService.createMail(this.mailForm.value).subscribe((data) => {
      this.router.navigate(['/dashboard/sent']);
    });
  }
}

