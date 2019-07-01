import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProfileComponent } from './profile/profile.component';
import { ViewComponent } from './profile/view/view.component';
import { EditComponent } from './profile/edit/edit.component';
import { ProjectsComponent } from './projects/projects.component';
import { DashboardComponent } from './dashboard.component';
import { HomeComponent } from '../home/home.component';
import { IndexComponent } from './index/index.component';
import { AuthGuardService } from '../services/guard/auth-guard.service';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    children: [
      {path: '', component: IndexComponent},
      {path: 'projects', component: ProjectsComponent},
      {path: 'profile', component: ProfileComponent},
    ],
    canActivate: [AuthGuardService]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
