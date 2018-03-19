import { Component } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
    moduleId: module.id,
    templateUrl: 'clienttestimonials.component.html',
    styleUrls: ['../app.component.css',
                '../font-awesome/css/fontawesome-all.min.css']

})

export class ClientTestimonials {
  title = "Client Testimonials";
  testimonials = [
    {
      quote: "We moved our Corporate headquarters from one state to another last year and Orion provided us with some “transition team members” who were able to bridge the gap between some of our team members leaving and new team members coming onboard.  The transition team members were able to get up to speed quickly and work in a difficult environment.  As an HR Manager, I think one of the biggest challenges in filling open positions is finding the right “fit”.  Many candidates can look well qualified on paper for a position but will not work to their potential if the “fit” isn’t there.  Orion took the time to understand our company and vet the candidates for “fit”.",
      source: "Human Resources Manager, Global Automotive After Market Supplier"
    },
    {
      quote: "Orion Solutions is who I turn to first when I need auditors to fill staff gaps and to perform special projects.  The value proposition is outstanding because they provide experienced professional staff at rates which are less for than what you can get from other staffing providers.  In addition, the whole team at Orion Solutions is easy to work with.",
      source: "Audit Director, Global Automotive Supplier"
    },
    {
      quote: "We utilize both the professional and recruiting services offered by Orion Solutions. They are a valued partner.  Their team is quick to understand our business need and provide the right professionals for the project. They have found us awesome professionals with the right experience and fit to fill specialized, in demand positions.",
      source: "SVP Risk Management, Large Regional Bank"
    },
    {
      quote: "Thank you providing your Consultant; in my entire career so far I've yet to receive such great response from IT as he has shown. I've worked for a few big companies along the way and most of the time it takes days if not a week or longer to even get a response let alone quality responses. Our internal support group doesn't even compare.",
      source: "District Sales Manager, Global Automotive Supplier"
    },
    {
      quote: "Great job!!!  It’s not very common that management gives such a nice compliment to the auditor.  You are very knowledgeable in your field!",
      source: "Corporate Audit Manager, Major Insurance Organization"
    }
  ]

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
