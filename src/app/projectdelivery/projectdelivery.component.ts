import { Component } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
    moduleId: module.id,
    templateUrl: 'projectdelivery.component.html',
    styleUrls: ['projectdelivery.component.css',
                '../app.component.css',]

})

export class ProjectDeliveryComponent {
  title = "Project Delivery";

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
