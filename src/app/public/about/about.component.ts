import { Component, OnInit, ViewChild } from '@angular/core';
import { MatAccordion, MatExpansionPanel } from "@angular/material/expansion";
import { Router } from '@angular/router';
import { AboutService } from './about.service';

//component to render about page
@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  @ViewChild(MatAccordion) accordion: MatAccordion;

  //define variables
  faqs: any;
  isLodaing: boolean = true;
  message: string = 'Loading...';

  constructor(
    private aboutService: AboutService,
    private router: Router
  ) { 
    //comment here
  }

  ngOnInit(): void {
    this.displayFaq();
  }

  //get faq list
  displayFaq(){
    this.aboutService.getFaq().subscribe({
      next:(response) => {
        this.faqs = response;
        this.isLodaing = false;
        return response;
      },
      error:(err) => {
        this.isLodaing = false;
        this.message = 'something went wrong please try again later.';
        console.log(err);
      }
    });
    
  }

  //expand collapse start here
  expandPanel(matExpansionPanel: MatExpansionPanel, event: any) {
    event.stopPropagation();

    if (!this._isExpansionIndicator(event.target)) {
      matExpansionPanel.close();
    }
  }

  private _isExpansionIndicator(target: EventTarget | any): boolean {
    const expansionIndicatorClass = "mat-expansion-indicator";
    return (
      target.classList && target.classList.contains(expansionIndicatorClass)
    );
  }
  //expand collapse end here
}
