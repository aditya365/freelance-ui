import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SiteRoutingModule } from './site-routing.module';
import { HomeComponent } from './home/home.component';
import { SiteHeaderComponent } from './site-header/site-header.component';
import { SiteFooterComponent } from './site-footer/site-footer.component';
import { MaterialModule } from '../material/material.module';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    HomeComponent,
    SiteHeaderComponent,
    SiteFooterComponent,
  ],
  imports: [
    CommonModule,
    SiteRoutingModule,
    MaterialModule,
    SharedModule
  ]
})
export class SiteModule { }
