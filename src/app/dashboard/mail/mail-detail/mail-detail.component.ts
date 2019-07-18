import { Component, OnInit } from '@angular/core';
import { Mail } from '../models/mail';
import { MailService } from '../mail.service';

@Component({
  selector: 'app-mail-detail',
  templateUrl: './mail-detail.component.html',
  styleUrls: ['./mail-detail.component.scss']
})
export class MailDetailComponent implements OnInit {
  mails: Mail[];
  constructor(private mailservice: MailService) { }

  ngOnInit() {
    this.mailservice.getInbox().subscribe(mails=>this.mails=mails);
  }
}
