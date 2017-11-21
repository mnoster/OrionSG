import { Component } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
    moduleId: module.id,
    templateUrl: 'professionalsearch.component.html',
    styleUrls: ['professionalsearch.component.css',
                '../app.component.css',]

})

export class ProfessionalSearchComponent {
  title = "Professional Search";

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
