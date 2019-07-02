import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuardService } from './services/guard/auth-guard.service';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./site/site.module').then(mod => mod.SiteModule)
  },
  {
    path:'auth',
    loadChildren: () => import('./auth/auth.module').then(mod => mod.AuthModule)
  }
  // {
  //   path: 'user',
  //   loadChildren: () => import('./user/user.module').then(module => module.UserModule)
  // },
  // {
  //   path: 'dashboard',
  //   loadChildren: () => import('./dashboard/dashboard.module').then(module => module.DashboardModule),
  //   canActivate: [AuthGuardService]
  // },
  // {
  //   path: 'search',
  //   loadChildren: () => import('./search/search.module').then(module => module.SearchModule)
  // },
  // {
  //   path: 'jobs',
  //   loadChildren: () => import('./jobs/jobs.module').then(module => module.JobsModule)
  // },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
