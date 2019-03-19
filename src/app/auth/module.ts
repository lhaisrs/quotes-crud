import { NgModule } from '@angular/core';

//Components
import { SignInComponent } from './sign-in/component';
import { ForgotPasswordComponent } from './forgot-password/component';
import { CreateUserComponent } from './create-user/component';

@NgModule({
  declarations: [
    SignInComponent,
    ForgotPasswordComponent,
    CreateUserComponent
  ]
})
export class AuthModule { }