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
import { RecipesComponent } from './Components/recipes/recipes.component';
import { PreferencesComponent } from './Components/preferences/preferences.component';
import { ProtienComponent } from './FGC/protien/protien.component';
import { DairyComponent } from './FGC/dairy/dairy.component';
import { VegetablesComponent } from './FGC/vegetables/vegetables.component';
import { SpicesComponent } from './FGC/spices/spices.component';
import { FruitsComponent } from './FGC/fruits/fruits.component';
import { GrainsComponent } from './FGC/grains/grains.component';
import { CannedGoodsComponent } from './FGC/canned-goods/canned-goods.component';
import { CondimentsComponent } from './FGC/condiments/condiments.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';

import { HttpClientModule } from '@angular/common/http';
// import {IvyCarouselModule} from 'angular-responsive-carousel';
// import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FilterPipe } from './filter.pipe';
import { RouterModule } from '@angular/router';
import { JwtHelperService, JWT_OPTIONS } from '@auth0/angular-jwt';
import { AuthGuardService } from './Services/auth-guard.service';
import { IngFormService } from './Services/ing-form.service';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignUpComponent,
    LandingComponent,
    NavBarComponent,
    PantryComponent,
    RecipesComponent,
    PreferencesComponent,
    ProtienComponent,
    DairyComponent,
    VegetablesComponent,
    SpicesComponent,
    FruitsComponent,
    GrainsComponent,
    CannedGoodsComponent,
    CondimentsComponent,
    FilterPipe
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    RouterModule,
    // NgbModule,
    // IvyCarouselModule
  ],
  providers: [{ provide: JWT_OPTIONS, useValue: JWT_OPTIONS },
    JwtHelperService, AuthGuardService, ],
  bootstrap: [AppComponent]
})
export class AppModule { }
