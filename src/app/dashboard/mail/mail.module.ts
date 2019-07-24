import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MailRoutingModule } from './mail-routing.module';
import { InboxComponent } from './inbox/inbox.component';
import { SentComponent } from './sent/sent.component';
import { MailItemComponent } from './mail-item/mail-item.component';
import { MailDetailComponent } from './mail-detail/mail-detail.component';
import { HttpClientModule } from '@angular/common/http';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [InboxComponent, SentComponent, MailItemComponent, MailDetailComponent],
  imports: [
    CommonModule,
    MailRoutingModule,
    HttpClientModule,
    SharedModule,
  ]
})
export class MailModule { }
