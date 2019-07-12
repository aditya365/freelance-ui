import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { ProjectsComponent } from './projects/projects.component';
import { ProfileComponent } from './profile/profile.component';
import { ViewComponent } from './profile/view/view.component';
import { EditComponent } from './profile/edit/edit.component';
import { ProjectListComponent } from './projects/project-list/project-list.component';
import { DashboardComponent } from './dashboard.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { MatToolbarModule, MatButtonModule, MatIconModule } from '@angular/material';
import { SharedModule } from '../shared/shared.module';
import { MailModule } from './mail/mail.module';

@NgModule({
  declarations: [ProjectsComponent, ProfileComponent, ViewComponent, EditComponent, ProjectListComponent, DashboardComponent, HeaderComponent, FooterComponent, SidebarComponent],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    SharedModule,
    MailModule
  ],
  providers: [],
  bootstrap: [DashboardComponent]
})
export class DashboardModule { }
