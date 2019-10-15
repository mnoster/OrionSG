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
  subtitle = "Keep up to date with industry trends and recruiting"
  categories = [
    {
      name: 'accounting', title: "Accounting", open: false,
      articles: [
        { title: "Accounting Executive Summary", link: "https:/bit.ly", date: "2019-09-22" },
        { title: "Current Landscape", link: "https:/bit.ly", date: "2019-08-22" }
      ]
    },
    { name: 'finance', title: "Finance", open: false, articles: [{ title: "Finance Today", link: "https:/bit.ly", date: "2019-09-22" }] },
    { name: 'itaudit', title: "IT Audit and Security", open: false, articles: [{ title: "Auditing in Big Companies", link: "https:/bit.ly", date: "2019-09-22" }] },
    { name: 'supplychain', title: "Accounting", open: false, articles: [{ title: "What You Need To Know", link: "https:/bit.ly", date: "2019-09-22" }] },
  ]


  ngOnInit() {
    // fetch articles
  }

  showMenu(category) {
    let i = this.categories.indexOf(category);
    this.categories[i].open = !this.categories[i].open;
  }

}
