import { Component, OnInit } from '@angular/core';
import { Mail } from '../models/mail';
import { MailService } from '../mail.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-mail-detail',
  templateUrl: './mail-detail.component.html',
  styleUrls: ['./mail-detail.component.scss']
})
export class MailDetailComponent implements OnInit {
  mailId: any;
  mail: Mail;
  constructor(private mailservice: MailService, private activeRoute: ActivatedRoute) { }

  ngOnInit() {
    console.log(this.activeRoute);
    this.mailservice.getInboxById(this.activeRoute.snapshot.params.id).subscribe(mail => this.mail = mail);
    console.log(this.mail)
  }
}
