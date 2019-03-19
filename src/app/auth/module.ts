import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

//Components
import { SignInComponent } from './sign-in/component';
import { ForgotPasswordComponent } from './forgot-password/component';
import { CreateUserComponent } from './create-user/component';

@NgModule({
  declarations: [
    SignInComponent,
    ForgotPasswordComponent,
    CreateUserComponent
  ],
  imports: [
    ReactiveFormsModule
  ]
})
export class AuthModule { }