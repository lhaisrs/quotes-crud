import { Component } from '@angular/core';

import { Router } from '@angular/router';

@Component({
  selector: 'create-user',
  templateUrl: './component.html',
  styleUrls: ['../shared/auth.component.css']
})
export class CreateUserComponent {

  constructor(private router: Router) {}

  goToSignIn() {
    this.router.navigate(['/signIn']);
  }

}