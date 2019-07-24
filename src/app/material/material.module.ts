import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule, MatButtonModule, MatFormFieldModule, MatInputModule, MatSnackBarModule, MatSelectModule, MatAutocompleteModule, MatSidenavModule, MatIconModule, MatListModule, MatTree, MatTreeModule, MatCardModule, MatMenuModule } from '@angular/material';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatToolbarModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatSnackBarModule,
    MatSelectModule,
    MatAutocompleteModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatTreeModule,
    MatCardModule,
    MatMenuModule
  ], exports:[
    MatToolbarModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatSnackBarModule,
    MatSelectModule,
    MatAutocompleteModule,
    MatSidenavModule,
    MatButtonModule,
    MatIconModule,
    MatListModule,
    MatTreeModule,
    MatCardModule,
    MatMenuModule
  ]
})
export class MaterialModule { }
