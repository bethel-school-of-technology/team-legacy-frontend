import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './Components/login/login.component';
import { SignUpComponent } from './Components/sign-up/sign-up.component';
import { LandingComponent } from './Components/landing/landing.component';
// import { AuthModule } from './auth/auth.module';
import { NavBarComponent } from './Components/nav-bar/nav-bar.component';
import { PantryComponent } from './Components/pantry/pantry.component';
import { PantryCategoryComponent } from './Components/pantry/pantry-category/pantry-category.component';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignUpComponent,
    LandingComponent,
    // AuthModule,
    NavBarComponent,
    PantryComponent,
    PantryCategoryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
