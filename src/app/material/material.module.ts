import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule, MatButtonModule, 
    MatFormFieldModule, MatInputModule, MatSnackBarModule,
    MatSelectModule, MatAutocompleteModule, MatSidenavModule,
    MatIconModule, MatListModule, MatCardModule, MatTreeModule,
    MatGridListModule, MatSliderModule
  } from '@angular/material';

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
    MatCardModule,
    MatGridListModule,
    MatSliderModule,
    MatTreeModule
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
    MatCardModule,
    MatGridListModule,
    MatSliderModule,
    MatTreeModule
  ]
})
export class MaterialModule { }
