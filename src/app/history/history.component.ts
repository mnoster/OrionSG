import { Component } from '@angular/core';

@Component({
    moduleId: module.id,
    templateUrl: 'history.component.html',
    styleUrls: ['history.component.css',
                '../app.component.css']
})

export class HistoryComponent {
    title = "History";

    // Variables to later pull from the database
    summer_2012 = "Orion begins around a kitchen table with a group of "
                  + "like-minded people who felt that committing to "
                  + "serving clients, candidates and consultants was the "
                  + "most important thing. We wanted to be the best more "
                  + "than we wanted to be the biggest.";

    october_2012 = "Orion officially opens in a small office in Troy, "
                  + "Michigan. We received our first orders for "
                  + "professional search and contract staffing within "
                  + "a couple weeks.";

    november_2012 = "Orion successfully closes our first staffing job "
                  + "and our first professional search engagement. "
                  + "The staffing job would eventually turn into a "
                  + "two-year project that involved several consultants. "
                  + "Orion doubles the size of our internal team, making "
                  + "for a very cramped little office.";

    april_2013 = "Orion doubles our office space from one small office "
                  + "to two small offices – now our entire team could "
                  + "actually be on site at the same time.";

    may_2013 = "Orion reaches the milestone of our 100 th order!";

    september_2013 = "Orion continues to grow and we moved to a much "
                  + "larger space. Now everyone got to have their "
                  + "own office!";

    january_2014 = "Orion completes the first full year in business "
                  + "as a profitable, cash positive business! All that "
                  + "while carrying no debt.";

    april_2014 = "Partner and Co-Founder Dave Flynn is featured on a "
                  + "news story for the Detroit NBC affiliate, WDIV ";

    april_2014_a = "http://www.clickondetroit.com/news/clinton-township-woman-says-email-cost-her-new-job/25286652" 

    january_2015 = "Orion finishes another strong year with revenue "
                  + "growth, profitability and no debt. Orion takes on "
                  + "our 500 th order.";

    february_2015 = "During one of the coldest winters on record, Orion’s "
                  + "building suffers from a water line break and a "
                  + "flood that destroys our office space. We are up and "
                  + "running by the next day with no disruption to clients "
                  + "or candidates. Orion begins to work on projects "
                  + "outside the state of Michigan.";

    september_2015 = "Orion continues to add staff and has a build out "
                  + "in our space to add three additional offices.";

    january_2016 = "Orion does it again and finishes the year "
                  + "profitably and with no debt.";

    august_2016 = "Orion receives our 1000 th order.";

    summer_2016 = "Orion starts our college internship program. Our "
                  + "first two interns do great – one eventually "
                  + "becomes a permanent Orion employee and the other "
                  + "fulfills a lifelong dream of working for Disney.";

    january_2017 = "The streak continues as Orion completes our "
                  + "fourth year in business profitably and with no debt.";
                  
    october_2017 = "Orion joins the Finance and Accounting Consultants Alliance "
                  + "(FINACA).  FINACA is a nationwide network of independent consulting firms focused on "
                  + "exceptional client service (http://thefinaca.com/).  Orion is honored to join this elite group of"
                  + " companies, giving us an even broader range of services to offer clients around the U.S.";

    january_2018 = "Orion caps off another successful year!  2017 saw a 50% "
                  + "growth rate, strong profitability and no debt.  We also received a perfect 10 net "
                  + "promotor score from our candidates.  They were asked on a scale of one to ten to indicate how "
                  + "likely they were to refer Orion to a friend or peer."
}
