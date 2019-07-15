import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MailRoutingModule } from './mail-routing.module';
import { InboxComponent } from '../../inbox/inbox.component';
import { InboxItemComponent } from './inbox-item/inbox-item.component';
import { MailListComponent } from './mail-list/mail-list.component';
import { MailItemComponent } from './mail-item/mail-item.component';
import { MaterialModule } from 'src/app/material/material.module';

@NgModule({
  declarations: [InboxComponent, InboxItemComponent, MailListComponent, MailItemComponent],
  imports: [
    CommonModule,
    MailRoutingModule,
    MaterialModule
  ]
})
export class MailModule { }
