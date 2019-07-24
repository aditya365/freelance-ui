import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MailRoutingModule } from './mail-routing.module';
import { InboxComponent } from './inbox/inbox.component';
import { SentComponent } from './sent/sent.component';
import { MailItemComponent } from './mail-item/mail-item.component';
import { MailDetailComponent } from './mail-detail/mail-detail.component';
import { HttpClientModule } from '@angular/common/http';
import { SharedModule } from 'src/app/shared/shared.module';
import { ComposeComponent } from './compose/compose.component';

import{NgxEditorModule} from 'ngx-editor'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
@NgModule({
  declarations: [InboxComponent, SentComponent, MailItemComponent, MailDetailComponent, ComposeComponent],
  imports: [
    CommonModule,
    NgxEditorModule,
    FormsModule,
    ReactiveFormsModule,
    AngularFontAwesomeModule,    
    MailRoutingModule,
    HttpClientModule,
    SharedModule,
  ]
})
export class MailModule { }
