import { Component } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
    moduleId: module.id,
    templateUrl: 'candidatetestimonials.component.html',
    styleUrls: ['../app.component.css',
                '../font-awesome/css/fontawesome-all.min.css']

})

export class CandidateTestimonials {
  title = "Candidate Testimonials";
  testimonials = [
    {
      quote: "The Orion recruiters are great at their job and a very knowledgeable bunch. I felt that they were very professional in their dealings and cared about what I was looking for in a job. I had a great experience with their friendly recruiters unlike other recruiters who try to force you into taking jobs that are not what the candidate is looking for. I would recommend Orion to anyone with an accounting/finance background looking for a change in jobs.",
      source: "Regulatory Accounting Specialist placed at a Major Regional Utility"
    },
    {
      quote: 'Unlike many other "cold calls" I had received from recruiters, Orion’s message was tailored specifically for me, and showed research and a game-plan were already underway. I chose to work with Orion Solutions Group because they listened to what I wanted to do with my career. When the market presented nothing of interest, they got creative and designed a matrix of companies in the area I wanted to work. Together, we went through the company profiles one-by-one to determine where my next move would be (should the opportunity present itself).  I told them my off-the cuff company of choice and the role I wanted--knowing there weren\'t any open positions at the time.  Leveraging Orion’s network at this company, they presented me as a candidate anyway in the event something would pop up.  Within a few weeks, I had an interview at this company and eventually received an offer for a position they created for me!  Because of their ability to understand and hear client needs/wants\/potential, I will continue to use Orion Solutions Group in the future. I was treated like a friend and not a transaction.',
      source: "SEC Reporting Senior Analyst placed at a Global Automotive Tier One Supplier"
    },
    {
      quote: "I'm very excited about the offer. Thank you so much for your efforts and help during this process. I'm really impressed with your professionalism and the way you work with the candidates.   Without your help, my job search would not run this well. You should be very proud of your job! Thanks again.",
      source: "Tax Analyst placed at a Global Automotive OEM"
    },
    {
      quote: "I wanted to write a quick note to thank you for all the hard work you did in helping me through my career transition. From the first time that Orion got on the phone with me in order to get to know me as a person and not just words written on a piece of paper or simply from my LinkedIn profile. They took the time to ask about not only my past but also about what I was looking for in a future career. I appreciated how you guys kept in touch and kept me informed throughout. I was especially impressed with accommodating me when time was of the essence and going out of your way to meet in a convenient location to get paperwork completed.",
      source: "Interim Controller, Regional Clothing Retailer"
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
