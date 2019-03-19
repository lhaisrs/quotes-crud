import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'sign-in',
  templateUrl: './component.html',
  styleUrls: ['../shared/auth.component.css']
})
export class SignInComponent {

  signInForm = new FormGroup({
    email: new FormControl(''),
    password: new FormControl('')
  })

  constructor(private router: Router){ }

  goToForgotPassword() {
    this.router.navigate(['/forgotPassword']);
  }

  goToCreate() {
    this.router.navigate(['/createUser']);
  }

  signIn(){
    console.log("Signin In");
  }

}
