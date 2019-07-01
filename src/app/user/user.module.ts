import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { URoutingModule } from './user-routing.module';
import { UserComponent } from '../user/user/user.component';

@NgModule({
  declarations: [UserComponent],
  imports: [
    CommonModule,
    URoutingModule
  ]
})
export class UserModule { }
