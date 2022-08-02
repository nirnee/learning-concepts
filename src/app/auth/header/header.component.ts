import { Component, OnInit } from '@angular/core';

//component to render header 
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor() { 
    //comment here
  }

  user: any;
  ngOnInit(): void {
     this.user = localStorage.getItem("userName");
  }

}
