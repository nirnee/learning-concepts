import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { LoginService } from './login/login.service';
import { SignupComponent } from './signup/signup.component';
import { SignupService } from './signup/signup.service';

@NgModule({
  declarations: [ LoginComponent, SignupComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    HttpClientModule
  ],
  providers:[LoginService, SignupService],
  exports:[LoginComponent, SignupComponent]
})
export class ComponentsModule { }
