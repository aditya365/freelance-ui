import { SearchService } from 'src/app/services/search/search.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SearchRoutingModule } from './search-routing.module';
import { UsersComponent } from './users/users.component';
import { ProjectsComponent } from './projects/projects.component';
import { ProjectListComponent } from './projects/project-list/project-list.component';
import { UserListComponent } from './users/user-list/user-list.component';
import { DeveloperProfileComponent } from '../shared/developer-profile/developer-profile.component';
import { DevelopersFiltersComponent } from '../shared/developers-filters/developers-filters.component';

import {
  MatCardModule,
  MatChipsModule,
  MatIconModule
} from '@angular/material';

@NgModule({
  declarations: [
    UsersComponent,
    ProjectsComponent,
    ProjectListComponent,
    UserListComponent,
    DeveloperProfileComponent,
    DevelopersFiltersComponent,
  ],
  imports: [
    CommonModule,
    SearchRoutingModule,
    MatCardModule,
    MatIconModule,
    MatChipsModule,
  ],
  providers: [SearchService],
})
export class SearchModule { }
