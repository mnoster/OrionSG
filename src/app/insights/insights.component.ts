import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-insights',
  templateUrl: './insights.component.html',
  styleUrls: [
    './insights.component.css',
    '../app.component.css']
})
export class InsightsComponent implements OnInit {

  title = "Orion Insights"
  subtitle = "Our goal is always to bring significant insight and communication from our industry experts"
  categories = [
    {
      name: 'supplychain', title: "Supply Chain", open: true,
      articles: [
        { title: "Top Ways to Outside Source", link: "https://conta.cc/2MFPiOP", date: "2019-10" },
        { title: "Uber Professionals", link: "https://conta.cc/2lvRZaZ", date: "2019-09" },
        { title: "TMS/WMS/Technical People", link: "https://conta.cc/31T5u46", date: "2019-08" },
        { title: "Recruiting Great People In An Era Of Record-Low Unemployment", link: "https://conta.cc/2yDzi7Z", date: "2019-07" },
        { title: "Bring the latest skill sets to your company", link: "https://conta.cc/2RhIs2R", date: "2019-06" },
        { title: "Employers vs. the Supply Chain Talent Shortage of 2019", link: "https://conta.cc/2H4ZJav", date: "2019-05" },
      ]
    },
    {
      name: 'finance', title: "Finance", open: false,
      articles: [
        { title: "Top Ways to Outside Source", link: "https://conta.cc/2MFPiOP", date: "2019-10" },
        { title: "Uber Professionals", link: "https://conta.cc/2lvRZaZ", date: "2019-09" },
        { title: "TMS/WMS/Technical People", link: "https://conta.cc/31T5u46", date: "2019-08" },
        { title: "Recruiting Great People In An Era Of Record-Low Unemployment", link: "https://conta.cc/2yDzi7Z", date: "2019-07" },
        { title: "Bring the latest skill sets to your company", link: "https://conta.cc/2RhIs2R", date: "2019-06" },
      ]
    },
    {
      name: 'itaudit', title: "IT Audit and Security", open: false,
      articles: [
        { title: "Top Ways to Outside Source", link: "https://conta.cc/2MFPiOP", date: "2019-10" },
        { title: "Uber Professionals", link: "https://conta.cc/2lvRZaZ", date: "2019-09" },
        { title: "Recruiting Great People In An Era Of Record-Low Unemployment", link: "https://conta.cc/2yDzi7Z", date: "2019-07" },
        { title: "Bring the latest skill sets to your company", link: "https://conta.cc/2RhIs2R", date: "2019-06" },
      ]
    },
  ]


  ngOnInit() {
    // fetch articles
  }

  showMenu(category) {
    let i = this.categories.indexOf(category);
    this.categories[i].open = !this.categories[i].open;
  }

}
