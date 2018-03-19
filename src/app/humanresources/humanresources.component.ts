import { Component } from '@angular/core';

@Component({
    moduleId: module.id,
    templateUrl: 'humanresources.component.html',
    styleUrls: ['humanresources.component.css',
                '../app.component.css',]

})

export class HumanResourcesComponent {
  title = "Human Resources";

  examples = [
    {
      id: "engineeringCompany", title: "Recruiting Process Outsourcing – Engineering Company",
      clientIssue: "Our client, a fast growing pre-IPO engineering firm, was adding people at break neck pace but did not have the internal capacity to keep up.",
      orionSolution: "Orion provided a hybrid solution that included outsourced recruiting services for open positions, while supporting the client’s efforts to build an internal HR team.",
      clientOutcomes: "Orion successfully recruited the entire accounting and finance function for the client. We attracted some of the top talent from the Big 4 public accounting firms and worked closely with the new HR function to manage the recruiting and onboarding process."
    },
    {
      id: "GlobalFinance", title: "Recruiting Process Outsourcing – Global Finance Company",
      clientIssue: "Our client, a global financial services company, experienced tremendous growth and needed highly qualified candidates across a broad spectrum of areas including: data analytics, accounting, internal audit, talent acquisition, risk management, and finance.",
      orionSolution: "Orion established a single point of contact to manage candidate flow and client status reporting, while assigning a specific recruiter to lead the efforts for each key area (e.g., data analytics, risk management, etc.).",
      clientOutcomes: "Orion has helped the client hire nearly 50 people to date. We have been engaged on both contingent and retained searches, and after less than one year were named a Primary Vendor at the client."
    },
    {
      id: "leadershipDevelopmentProgram", title: "Leadership Development Program",
      clientIssue: "Our client, a global financial services company, created an international leadership development program. The targeted professionals for this program included people with strong business acumen, advanced degrees, and fluency in at least two languages. The professionals also needed to be globally mobile and able to relocate internationally up to a year at a time.",
      orionSolution: "Orion proposed a fixed price recruiting solution based on a highly disciplined screening approach. First, we assigned a core team of recruiters to focus on the initiative and developed a pool of potential candidates from college campuses, professional organizations, and consulting firms. The next phase included a language proficiency call with client personnel from other countries, and an on-site interview with the HR executive. Those passing this stage were invited into a comprehensive day-long assessment by key client executives.",
      clientOutcomes: "Orion succeeded in placing all the open positions, and kept the cost per hire below market rates. Orion was asked to run this program again several times and recruited a total of ten people into the program."
    },
    {
      id: "compensationStudy", title: "Compensation Study",
      clientIssue: "Our client, a global Tier One Automotive Supplier, has thousands of employees across a broad array of job roles across North America. The client wanted to assess compensation levels across job functions and geographic locations to ensure they were current with the market.",
      orionSolution: "Orion provided a consultant who was a former global compensation director for a major corporation. The consultant developed an analysis approach and applied it across the various geographic locations.",
      clientOutcomes: "The Orion consultant completed the analysis on time and produced actionable recommendations for the senior management team. The client asked to extend the project to include additional job classes and locations."
    },
    {
      id: "instructionalDesign", title: "Instructional Design",
      clientIssue: "Our client, a global manufacturing company, was implementing a new cloud-based human capital management software solution and needed help with training and roll out process.",
      orionSolution: "Orion provided a highly experience instructional design consultant who implemented a process that included interviewing key users, developing baseline content, and getting the content into a web based presentation format that could be accessed from anywhere in the world.",
      clientOutcomes: "The training program was considered such a success that the client re-engaged the Orion consultant to take on a training design for a senior leadership program."
    }
  ]
}
