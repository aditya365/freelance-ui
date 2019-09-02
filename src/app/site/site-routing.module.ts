import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DevelopersComponent } from './developers/developers.component';
import { SiteComponent } from './site.component';

const routes: Routes = [
  {
    path: '', component: SiteComponent, children: [
      { path: '', component: HomeComponent },
      { path: 'developers', component: DevelopersComponent },
      // { path: 'jobs', component: DevelopersComponent },
    ]
  },
  
  // { path: 'jobs', component: DevelopersComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SiteRoutingModule { }
