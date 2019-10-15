import { Component, OnInit } from '@angular/core';
// import { Router, ActivatedRoute } from '@angular/router';

@Component({
    moduleId: module.id,
    selector: 'navigation',
    templateUrl: "navigation.component.html",
    styleUrls: ['navigation.component.css']
})

export class NavigationComponent {
  home = 'Home';
  supplychain = 'Supply Chain'
  jobs = 'Open Positions'
  about = 'About';
  ourteam = 'Our Team';
  contact = 'Contact Us'
  vision = 'Vision';
  insights = 'Insights';
  history = 'History';
  login = 'Login';
  register = 'Register';
  clienttestimonials = 'Client Testimonials';
  candidatetestimonials = 'Candidate Testimonials ';
}
