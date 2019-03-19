import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'sign-in',
  templateUrl: './component.html',
  styleUrls: ['../shared/auth.component.css']
})
export class SignInComponent {

  constructor(private router: Router){ }

  goToForgotPassword() {
    this.router.navigate(['/forgotPassword']);
  }

  goToCreate() {
    this.router.navigate(['/createUser']);
  }

}
