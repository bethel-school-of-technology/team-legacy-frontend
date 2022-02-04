import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingComponent } from './Components/landing/landing.component';
import { LoginComponent } from './Components/login/login.component';
import { NavBarComponent } from './Components/nav-bar/nav-bar.component';
import { PantryComponent } from './Components/pantry/pantry.component';
import { PreferencesComponent } from './Components/preferences/preferences.component';
import { RecipesComponent } from './Components/recipes/recipes.component';
import { SignUpComponent } from './Components/sign-up/sign-up.component';
import { CanActivate } from '@angular/router';
import { AuthGuardService as AuthGuard } from './Services/auth-guard.service';

const routes: Routes = [{

  path: 'landing',
  component: LandingComponent
},

{
  path: 'login',
component: LoginComponent
},
{ path: '**', redirectTo: '' },
{
  path:'pantry',
  component:PantryComponent,
  canActivate: [AuthGuard]
},
{
  path:'preferences',
  component: PreferencesComponent,
  canActivate: [AuthGuard]
  
},
{
  path:'recipes',
  component:RecipesComponent,
  canActivate: [AuthGuard]
},
{
  path:'sign-up',
  component:SignUpComponent
},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
