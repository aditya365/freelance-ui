import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RecaptchaModule, RECAPTCHA_SETTINGS, RecaptchaSettings } from 'ng-recaptcha';
import { RecaptchaFormsModule } from 'ng-recaptcha/forms';
import { AlertService } from '../services/alert/alert.service';
import { MaterialModule } from '../material/material.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RecaptchaModule,
    RecaptchaFormsModule,
    MaterialModule
  ], exports: [
    RecaptchaModule,
    RecaptchaFormsModule,
  ], providers: [AlertService,
    {
      provide: RECAPTCHA_SETTINGS,
      useValue: {
        siteKey: '6LeU2aoUAAAAAO_cj1daqgdDy67dD6hyx8z-mt6c',
      } as RecaptchaSettings,
    }],

})
export class SharedModule { }
