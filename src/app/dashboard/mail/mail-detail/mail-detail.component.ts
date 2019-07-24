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
  type: string;
  constructor(private mailservice: MailService, private activeRoute: ActivatedRoute) {
  }

  ngOnInit() {
    this.getMailType();
    this.getMailDetails();
  }

  getMailType() {
    this.type = this.activeRoute.snapshot.routeConfig.path.indexOf('inbox') > -1 ? 'inbox' : 'sent';
  }

  getMailDetails() {
    if (this.type == 'inbox') {
      this.mailservice.getInboxById(this.activeRoute.snapshot.params.id).subscribe(mail => this.mail = mail[0]);
    } else {
      this.mailservice.getSentById(this.activeRoute.snapshot.params.id).subscribe(mail => this.mail = mail[0]);
    }
  }
}
