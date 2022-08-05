import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

//component to render header 
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  
  date:Date = new Date(); 

  constructor(private router: Router) { 
     setInterval(() => {
      this.date = new Date();
    }, 1000)
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
