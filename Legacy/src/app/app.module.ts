import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './Components/login/login.component';
import { SignUpComponent } from './Components/sign-up/sign-up.component';
import { LandingComponent } from './Components/landing/landing.component';
// import { AuthModule } from './auth/auth.module';
import { NavBarComponent } from './Components/nav-bar/nav-bar.component';
import { PantryComponent } from './pantry/pantry.component';
import { RecipesComponent } from './recipes/recipes.component';
import { PreferencesComponent } from './Components/preferences/preferences.component';
import { ProtienComponent } from './FGC/protien/protien.component';
import { DairyComponent } from './FGC/dairy/dairy.component';
import { VegetablesComponent } from './FGC/vegetables/vegetables.component';
import { SpicesComponent } from './FGC/spices/spices.component';
import { FruitsComponent } from './FGC/fruits/fruits.component';
import { GrainsComponent } from './FGC/grains/grains.component';
import { CannedGoodsComponent } from './FGC/canned-goods/canned-goods.component';
import { CondimentsComponent } from './FGC/condiments/condiments.component';
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
    CondimentsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
