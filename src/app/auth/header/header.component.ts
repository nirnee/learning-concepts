import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

//component to render header 
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private router: Router) { 
    //comment here
  }

  user: any;
  
  ngOnInit(): void {
     this.user = localStorage.getItem("userName");
  }

  //redirect to other pages
  redirect(page: any){
    console.log(page);
    this.router.navigateByUrl('/',page);
  }

}
