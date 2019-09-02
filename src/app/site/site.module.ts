import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SiteRoutingModule } from './site-routing.module';
import { HomeComponent } from './home/home.component';
import { SiteHeaderComponent } from './site-header/site-header.component';
import { SiteFooterComponent } from './site-footer/site-footer.component';
import { MaterialModule } from '../material/material.module';
import { SharedModule } from '../shared/shared.module';
import { SearchService } from '../services/search/search.service';
import { DevelopersListComponent } from './developers/developers-list/developers-list.component';
import { DevelopersItemComponent } from './developers/developers-item/developers-item.component';
import { DevelopersFilterComponent } from './developers/developers-filter/developers-filter.component';
import { DevelopersComponent } from './developers/developers.component';
import { SiteComponent } from './site.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    HomeComponent,
    SiteHeaderComponent,
    SiteFooterComponent,
    DevelopersListComponent,
    DevelopersItemComponent,
    DevelopersFilterComponent,
    DevelopersComponent,
    SiteComponent,
  ],
  imports: [
    CommonModule,
    SiteRoutingModule,
    MaterialModule,
    SharedModule,
    ReactiveFormsModule
  ],
  providers: [SearchService]
})
export class SiteModule { }
