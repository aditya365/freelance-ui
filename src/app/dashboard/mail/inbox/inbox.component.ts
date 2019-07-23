import { Component, OnInit } from '@angular/core';
import { MailService } from '../mail.service';
import { Mail } from '../models/mail';

@Component({
  selector: 'app-inbox',
  templateUrl: './inbox.component.html',
  styleUrls: ['./inbox.component.scss']
})
export class InboxComponent implements OnInit {
  mails: Mail[];
  constructor(private mailservice: MailService) { }

  ngOnInit() {
    this.mailservice.getInbox().subscribe(mails=>this.mails=mails);
  }
}
