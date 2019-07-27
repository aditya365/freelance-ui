import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DevelopersComponent } from './developers/developers.component';
import { DeveloperSearchComponent } from './developer-search/developer-search.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'developers', component: DevelopersComponent },
  { path: 'developers/:id', component: DeveloperSearchComponent },
  { path: 'jobs', component: DevelopersComponent },
  { path: 'jobs/:id', component: DeveloperSearchComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SiteRoutingModule { }
