import { Component } from '@angular/core';

import { Router } from '@angular/router';

@Component({
  selector: 'forgot-password',
  templateUrl: './component.html',
  styleUrls: ['../shared/auth.component.css']
})
export class ForgotPasswordComponent {

  constructor(private router: Router) {}

  goToSignIn() {
    this.router.navigate(['/signIn']);
  }

  goToCreate() {
    this.router.navigate(['/createUser']);
  }

}
