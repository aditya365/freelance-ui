import { Component, OnInit } from '@angular/core';
import { Mail } from '../models/mail';
import { MailService } from '../mail.service';

@Component({
  selector: 'app-sent',
  templateUrl: './sent.component.html',
  styleUrls: ['./sent.component.scss']
})
export class SentComponent implements OnInit {
  private _mails: Mail[];
  public get mails(): Mail[] {
    return this._mails;
  }
  public set mails(value: Mail[]) {
    this._mails = value;
  }
  constructor(private mailservice: MailService) { }
  ngOnInit() {
    this.mailservice.getSendMails().subscribe(mails => this.mails =mails);
  }

}
