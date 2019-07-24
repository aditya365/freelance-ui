import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule, MatButtonModule, MatFormFieldModule, MatInputModule, MatSnackBarModule, MatSelectModule, MatAutocompleteModule, MatSidenavModule, MatIconModule, MatListModule, MatTree, MatTreeModule, MatCardModule } from '@angular/material';

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
    MatCardModule
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
    MatCardModule
  ]
})
export class MaterialModule { }
