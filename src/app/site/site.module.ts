import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SiteRoutingModule } from './site-routing.module';
import { HomeComponent } from './home/home.component';
import { SiteHeaderComponent } from './site-header/site-header.component';
import { SiteFooterComponent } from './site-footer/site-footer.component';
import { MaterialModule } from '../material/material.module';
import { SharedModule } from '../shared/shared.module';
import { DevelopersComponent } from './developers/developers.component';
import { DeveloperSearchComponent } from './developer-search/developer-search.component';
import { SearchService } from '../services/search/search.service';
import { DevFiltersComponent } from './dev-filters/dev-filters.component';

@NgModule({
  declarations: [
    HomeComponent,
    SiteHeaderComponent,
    SiteFooterComponent,
    DevelopersComponent,
    DeveloperSearchComponent,
    DevFiltersComponent,
  ],
  imports: [
    CommonModule,
    SiteRoutingModule,
    MaterialModule,
    SharedModule
  ],
  providers: [SearchService]
})
export class SiteModule { }
