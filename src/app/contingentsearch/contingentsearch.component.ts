import { Component } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
    moduleId: module.id,
    templateUrl: 'contingentsearch.component.html',
    styleUrls: ['contingentsearch.component.css',
                '../app.component.css',]

})

export class ContingentSearchComponent {
  title = "Contingent Search";

  constructor(private router: Router) { }

  ngOnInit() {
      this.router.events.subscribe((evt) => {
          if (!(evt instanceof NavigationEnd)) {
              return;
          }
          window.scrollTo(0, 0)
      });
  }
}
