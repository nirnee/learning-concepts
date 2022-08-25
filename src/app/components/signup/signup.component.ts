import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { SignupService } from './signup.service';

//component to render signup page
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  constructor(
    private router: Router,
    private fb: FormBuilder,
    private signupService: SignupService
  ) { 
    //comment here
  }

  passwordNotMatch: boolean = false;
  validComment: boolean= true;

  //signup form
  signUpForm = this.fb.group({
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
        let data = {
          name: this.signUpForm.controls['name'].value,
          email: this.signUpForm.controls['email'].value,
          password: this.signUpForm.controls['password'].value,
          cpassword: this.signUpForm.controls['cpassword'].value
        }
      this.signupService.userSignup(data);
        this.router.navigateByUrl('/login');
      } else {
        this.passwordNotMatch = true;
      }
    } else {
      //if form is not valid show error message
      this.validComment = false;
    }
  }

}
