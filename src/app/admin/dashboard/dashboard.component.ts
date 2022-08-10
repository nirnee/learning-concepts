import { Component, OnInit } from '@angular/core';

//component to render dashboard
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  num: number = 1;
  constructor() { 
    //comment here
  }

  ngOnInit(): void {
    //comment here
  }

}
