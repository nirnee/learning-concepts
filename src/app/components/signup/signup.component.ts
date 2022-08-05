import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

//component to render signup page
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  constructor(
    private router: Router
  ) { 
    //comment here
  }

  passwordNotMatch: boolean = false;
  validComment: boolean= true;

  //signup form
  signUpForm = new FormGroup({
    name: new FormControl(),
    email: new FormControl(),
    password: new FormControl(),
    cpassword: new FormControl()
  });
  
  ngOnInit(): void {
    //comment here
  }

  //submit function
  submit(){
    this.passwordNotMatch = false;
    if(this.signUpForm.valid){
      if(this.signUpForm.controls['password'].value == this.signUpForm.controls['cpassword'].value) {
        this.router.navigateByUrl('/login')
      } else {
        this.passwordNotMatch = true;
      }
    } else {
      //if form is not valid show error message
      this.validComment = false;
    }
  }

   //login
  login(){
    this.router.navigateByUrl('/login');
  }

}
