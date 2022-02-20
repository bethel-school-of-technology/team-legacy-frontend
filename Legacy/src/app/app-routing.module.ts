import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingComponent } from './Components/landing/landing.component';
import { LoginComponent } from './Components/login/login.component';
import { NavBarComponent } from './Components/nav-bar/nav-bar.component';
import { PantryComponent } from './Components/pantry/pantry.component';
import { PreferencesComponent } from './Components/preferences/preferences.component';
import { RecipesComponent } from './Components/recipes/recipes.component';
import { SignUpComponent } from './Components/sign-up/sign-up.component';
// import { Router, CanActivate } from '@angular/router';
import { AuthGuardService as AuthGuard } from './Services/auth-guard.service';
import { CannedGoodsComponent } from './FGC/canned-goods/canned-goods.component';
import { CondimentsComponent } from './FGC/condiments/condiments.component';
import { DairyComponent } from './FGC/dairy/dairy.component';
import { FruitsComponent } from './FGC/fruits/fruits.component';
import { GrainsComponent } from './FGC/grains/grains.component';
import { ProtienComponent } from './FGC/protien/protien.component';
import { SpicesComponent } from './FGC/spices/spices.component';
// import { Router } from '@angular/router';
// import { AuthService } from './Services/auth.service';
// import { AuthGuardService } from './Services/auth-guard.service';
const routes: Routes = [
  {
    path: '', 
    redirectTo: 'landingPage',
    pathMatch: 'full'
  },
{
  path: 'landing',
  component: LandingComponent
},

{
  path: 'login',
  component: LoginComponent
},
{
  path: 'sign-up',
  component: SignUpComponent
},
// { path: '**', redirectTo: '' },

{
path: 'nav-bar',
component: NavBarComponent
},
{
  path: 'canned-goods',
  component: CannedGoodsComponent,
  // canActivate:  [AuthGuard]
},
{
  path: 'condiments',
  component: CondimentsComponent,
  // canActivate: [AuthGuard]
},
{
  path: 'dairy',
  component: DairyComponent,
  // canActivate: [AuthGuard]
},
{
  path: 'fruits',
  component: FruitsComponent,
  // canActivate: [AuthGuard]
},
{
  path: 'grains',
  component: GrainsComponent,
  // canActivate: [AuthGuard]
},
{
  path: 'protien',
  component: ProtienComponent,
  // canActivate: [AuthGuard]
},
{
  path: 'spices',
  component: SpicesComponent,
  // canActivate: [AuthGuard]
},
// {
//   path: 'nav-bar',
//   component: NavBarComponent
// },
{
  path: 'pantry',
  component: PantryComponent,
  // canActivate: [AuthGuard]
},
{
  path: 'preferences',
  component: PreferencesComponent,
  // canActivate: [AuthGuard]

},
{
  path: 'recipes',
  component: RecipesComponent,
  // canActivate: [AuthGuard]
},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
