import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InboxComponent } from './inbox/inbox.component';
import { MailDetailComponent } from './mail-detail/mail-detail.component';

const routes: Routes = [  {
  path: 'mail',
  component: InboxComponent,
  children: [
    {path: '', component: InboxComponent},
    {path: 'inbox/:id', component: MailDetailComponent},
  ],
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MailRoutingModule { }
