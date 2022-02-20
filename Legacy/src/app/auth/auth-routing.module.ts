import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from '../Components/login/login.component';
import { PantryComponent } from '../Components/pantry/pantry.component';
// import { ResetPasswordComponent } from '../Components/profile/reset-password.component';
import { SignUpComponent } from '../Components/sign-up/sign-up.component';
import { CannedGoodsComponent } from '../FGC/canned-goods/canned-goods.component';

const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'sign-up', component: SignUpComponent},
  // {path: 'reset-password', component: ResetPasswordComponent}
  // {path: 'pantry', component: PantryComponent},
  // {path: 'caned-goods', component: CannedGoodsComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
