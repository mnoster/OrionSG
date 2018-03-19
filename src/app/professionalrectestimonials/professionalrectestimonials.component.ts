import { Component } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
    moduleId: module.id,
    templateUrl: 'professionalrectestimonials.component.html',
    styleUrls: ['../app.component.css',
                '../font-awesome/css/fontawesome-all.min.css']

})

export class ProfessionalRecTestimonials {
  title = "Professional Recruiting Testimonials";
  testimonials = [
    {
      quote: "The team at Orion Solutions helped me fill 3 positions last year. I am happy to say that all 3 have turned out to be great hires! I felt the Orion team really took the time to understand the intangibles that I was looking for in potential candidates. They didn’t waste my time with candidates that did not meet my requirements. The Orion team was diligent, creative and honest throughout the process and I would recommend them to anyone.",
      source: "Internal Audit Director, Global Professional Services Firm"
    },
    {
      quote: "Orion Solutions Group shared only very highly qualified and perfectly matched candidates for the position we were looking to fill. I have worked with other recruiting firms and have not had such success and qualified candidates like the ones Orion shared.",
      source: "President and Co-Owner, International Machine Tool Company"
    },
    {
      quote: "I have to tell you, I’m blown away by how well you understand us. Your candidates were really good matches for our wishes and needs. Looking forward to the candidates in the financial analyst arena!",
      source: "Senior Manager – Risk and Treasury Services, Global Clothing Manufacturer"
    },
    {
      quote: "We utilize both the professional and recruiting services offered by Orion Solutions. They are a valued partner. Their team is quick to understand our business need and provide the right professionals for the project. They have found us awesome professionals with the right experience and fit to fill specialized, in demand positions.",
      source: "SVP Risk Management, Large Regional Bank"
    },
    {
      quote: 'We moved our Corporate headquarters from one state to another last year and Orion provided us with some “transition team members” who were able to bridge the gap between some of our team members leaving and new team members coming onboard. The transition team members were able to get up to speed quickly and work in a difficult environment. As an HR Manager, I think one of the biggest challenges in filling open positions is finding the right “fit”. Many candidates can look well qualified on paper for a position but will not work to their potential if the “fit” isn’t there.  Orion took the time to understand our company and vet the candidates for “fit”.',
      source: "Human Resources Manager, Global Automotive After Market Supplier"
    },
    {
      quote: "Orion Solutions is who I turn to first when I need auditors to fill staff gaps and to perform special projects.  The value proposition is outstanding because they provide experienced professional staff at rates which are less for than what you can get from other staffing providers.  In addition, the whole team at Orion Solutions is easy to work with.",
      source: "Audit Director, Global Automotive Supplier"
    },
    {
      quote: "Thank you providing your Consultant; in my entire career so far I've yet to receive such great response from IT as he has shown. I've worked for a few big companies along the way and most of the time it takes days if not a week or longer to even get a response let alone quality responses. Our internal support group doesn't even compare.",
      source: "District Sales Manager, Global Automotive Supplier"
    },
    {
      quote: "Great job!!! It’s not very common that management gives such a nice compliment to the auditor. You are very knowledgeable in your field!",
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
