import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SignupComponent } from './signup/signup.component';
import { SigninComponent } from './signin/signin.component';
import { VerifyEmailComponent } from './verify-email/verify-email.component';
import { SignoutComponent } from './signout/signout.component';

const routes: Routes = [
  {
    path: '',
    children: [
      { path: 'signin', component: SigninComponent },
      { path: 'signup', component: SignupComponent },
      { path: 'verify-email', component: VerifyEmailComponent },
      { path: 'signout', component: SignoutComponent }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
