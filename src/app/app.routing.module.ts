import { NgModule } from '@angular/core';

import { RouterModule, Routes, Router } from '@angular/router';

//Components
import { SignInComponent } from './auth/sign-in/component';
import { ForgotPasswordComponent } from './auth/forgot-password/component';
import { CreateUserComponent } from './auth/create-user/component';

const appRoutes : Routes = [
  { path: '', redirectTo: 'signIn', pathMatch: 'full'},
  { path: 'signIn', component: SignInComponent },
  { path: 'forgotPassword', component: ForgotPasswordComponent },
  { path: 'createUser', component: CreateUserComponent }
]

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }