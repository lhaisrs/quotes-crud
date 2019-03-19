import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'forgot-password',
  templateUrl: './component.html',
  styleUrls: ['../shared/auth.component.css']
})
export class ForgotPasswordComponent {

  forgotPasswordForm = new FormGroup({
    email: new FormControl('')
  });

  constructor(private router: Router) {}

  goToSignIn() {
    this.router.navigate(['/signIn']);
  }

  goToCreate() {
    this.router.navigate(['/createUser']);
  }

  forgotPassword(){
    console.log("Forgot password")
  }

}
