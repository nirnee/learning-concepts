import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

//component to render header 
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  
  //define variables
  date:Date = new Date(); 
  user: any;

  constructor(private router: Router) { 
    //below code will display current time
    setInterval(() => {
      this.date = new Date();
    }, 1000);
  } 
  
  ngOnInit(): void {
     let userData: any = localStorage.getItem("userData");
     this.user = JSON.parse(userData)?.['name'];
  }

  //logout function
  logout(){
    this.router.navigateByUrl('/');
  }

}
