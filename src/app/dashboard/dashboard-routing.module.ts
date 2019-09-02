import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProfileComponent } from './profile/profile.component';
import { ViewComponent } from './profile/view/view.component';
import { ProfileEditComponent } from './profile/edit/edit.component';
import { ProjectsComponent } from './projects/projects.component';
import { DashboardComponent } from './dashboard.component';
import { AuthGuardService } from '../services/guard/auth-guard.service';
import { InboxComponent } from './mail/inbox/inbox.component';
import { MailDetailComponent } from './mail/mail-detail/mail-detail.component';
import { ComposeComponent } from './mail/compose/compose.component';
import { SentComponent } from './mail/sent/sent.component'
import { AuthGuard } from '../core/guards/auth/auth.guard';

const routes: Routes = [
  {
    path: 'dashboard',
    component: DashboardComponent,
    canActivate:[AuthGuard],
    children: [
      { path: 'projects', component: ProjectsComponent },
      { path: 'profile', component: ProfileComponent },
      { path: 'profile/edit', component: ProfileEditComponent },
      { path: 'inbox', component: InboxComponent },
      { path: 'inbox/:id', component: MailDetailComponent },
      { path: 'compose', component: ComposeComponent },
      { path: 'sent', component: SentComponent },
      { path: 'sent/:id', component: MailDetailComponent },
    ],

    // canActivate: [AuthGuardService]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
