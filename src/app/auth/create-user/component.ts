import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'create-user',
  templateUrl: './component.html',
  styleUrls: ['../shared/auth.component.css']
})
export class CreateUserComponent {

  createUserForm = new FormGroup({
    name: new FormControl(''),
    email: new FormControl(''),
    password: new FormControl('')
  });

  constructor(private router: Router) {}

  goToSignIn() {
    this.router.navigate(['/signIn']);
  }

  createUser(){
    console.log("Creating a User");
  }

}