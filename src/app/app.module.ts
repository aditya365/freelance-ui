import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DashboardModule } from './dashboard/dashboard.module';
import { AuthComponent } from './auth/auth.component';
import { SigninComponent } from './auth/signin/signin.component';
import { SignupComponent } from './auth/signup/signup.component';
import { JobsModule } from './jobs/jobs.module';
import { SearchModule } from './search/search.module';
import { UserModule } from './user/user.module';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './home/footer/footer.component';
import { HeaderComponent } from './home/header/header.component';

import {
  MatToolbarModule, MatButtonModule, MatFormFieldModule, MatInputModule, MatSnackBarModule, MatSelectModule, MatAutocompleteModule
} from '@angular/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AlertComponent } from './shared/alert/alert.component';
import { AlertService } from './services/alert/alert.service';
import { VerifyEmailComponent } from './auth/verify-email/verify-email.component';
import { SearchComponent } from './home/search/search.component';
import { SignoutComponent } from './auth/signout/signout.component';
import { TestimonialsComponent } from './home/testimonials/testimonials.component';
import { CarouselComponent } from './home/carousel/carousel.component';
import { RecaptchaModule, RECAPTCHA_SETTINGS, RecaptchaSettings } from 'ng-recaptcha';
import { RecaptchaFormsModule } from 'ng-recaptcha/forms';

@NgModule({
  declarations: [
    AppComponent,
    AuthComponent,
    SigninComponent,
    SignupComponent,
    HomeComponent,
    FooterComponent,
    HeaderComponent,
    AlertComponent,
    AlertComponent,
    VerifyEmailComponent,
    SearchComponent,
    SignoutComponent,
    TestimonialsComponent,
    CarouselComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    DashboardModule,
    JobsModule,
    SearchModule,
    UserModule,
    MatToolbarModule,
    MatButtonModule,
    MatFormFieldModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatSnackBarModule,
    HttpModule,
    MatSelectModule,
    MatAutocompleteModule,
    MatSelectModule,
    RecaptchaModule,
    RecaptchaFormsModule
  ],
  providers: [AlertService,
    {
      provide: RECAPTCHA_SETTINGS,
      useValue: {
        siteKey: '6LeU2aoUAAAAAO_cj1daqgdDy67dD6hyx8z-mt6c',
      } as RecaptchaSettings,
    }],
  bootstrap: [AppComponent]
})
export class AppModule { }
