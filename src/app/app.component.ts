import { Component } from '@angular/core';
import { NavigationStart, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'assesment';
  showHead: boolean = true;

  constructor(private router: Router) {
  // on route change to '/login' and 'signup', set the variable showHead to false
    router.events.forEach((event) => {
      if (event instanceof NavigationStart) {
        if (event['url'].includes('/login') || event['url'].includes('/signup')) {
          this.showHead = false;
        } else {
          this.showHead = true;
        }
      }
    });
  }
}
