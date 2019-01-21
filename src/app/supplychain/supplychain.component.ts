import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-supplychain',
  templateUrl: './supplychain.component.html',
  styleUrls: ['./supplychain.component.css', '../app.component.css', '../font-awesome/css/fontawesome-all.min.css']
})
export class SupplychainComponent implements OnInit {

  constructor() { }

  title = "Supply Chain Services"

  topContent = "Orion’s approach to finding talent for your organization or finding the right opportunity for a candidate is consistent with it’s overall philosophy that is part of Orion’s DNA:"

  topQuote = "“We will be the most trusted source for professional talent in the markets we serve. Businesses will prefer working with us because of our absolute commitment to their success. Candidates will seek relationships with us because we are their best advocates.”"

  middleContent = "In order to execute on this promise, Orion has built its Supply Chain practice around seasoned Supply Chain professionals, with decades of experience working in the supply chain industry.  Professionals that understand the nuances of transportation and logistics operations, sales, and all supporting activities from both a carrier and a manufacturer/distributor/shipper network standpoint. "

  bottomContent = "Many of the positions that we fill have actually been held by Orion team members, from the ground floor to the senior leadership level.  Whether you need a role(s) filled or are looking for the perfect opportunity to advance your career, this experience in the supply chain industry is invaluable. Supply Chain and Logistics has its own language.  We speak that language and know what drives success."
  
  ngOnInit() {
  }

}
