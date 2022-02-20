import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
// import { ResetPasswordComponent } from '../Components/profile/reset-password.component';
import { LoginComponent } from '../Components/login/login.component';
import { SignUpComponent } from '../Components/sign-up/sign-up.component';
import { LandingComponent } from '../Components/landing/landing.component';
import { PantryComponent } from '../Components/pantry/pantry.component';


@NgModule({
  declarations: [
    // ResetPasswordComponent,
    LoginComponent,SignUpComponent,LandingComponent,PantryComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule
  ],
  exports: [
    // ResetPasswordComponent,
    LoginComponent,
    SignUpComponent,
    LandingComponent,
    PantryComponent
  ]
})
export class AuthModule { }
