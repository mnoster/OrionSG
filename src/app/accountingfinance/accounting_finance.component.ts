import { Component } from '@angular/core';

@Component({
    moduleId: module.id,
    templateUrl: 'accounting_finance.component.html',
    styleUrls: ['accounting_finance.component.css', '../app.component.css',]

})

export class AccountingFinanceComponent {
  title = "Accounting & Finance";

  examples = [
    {
      id: "secReportingAnnualReport", title: "SEC Reporting and Annual Report",
      clientIssue: "Our client, a global, publicly traded manufacturing company, lost their corporate controller late in the year. They needed to find a permanent replacement and during their search needed support to ensure the annual financial statements and SEC reporting was completed on time and at the highest level of quality.",
      orionSolution: "Orion brought in a specialized consultant with a CPA and more than twenty years of experience in public accounting, financial reporting, and technical accounting to lead the internal accounting team through the year-end process.",
      clientOutcomes: "Orion’s consultant managed the process with great success and allowed the client to meet the reporting deadlines while satisfying all key constituents including the Board of Directors and the external auditors. The Orion consultant also helped our client in the selection of several accounting candidates for full-time roles. Our consultant helped transition the new corporate controller through the following year’s Q1 financials, and was asked back to provide technical support for Q2."
    },
    {
      id: "accountingIntegration", title: "Accounting Integration",
      clientIssue: "Our client, a diversified, publicly traded manufacturing company, acquired a small business to add to the product portfolio. Our client wanted to convert the business to their ERP platform, but the accounting processes were very simple and in most cases not documented.",
      orionSolution: "Orion brought in a specialized consultant with more than twenty-five years of experience in accounting and finance roles, including CFO. Our consultant developed an approach to document the accounting processes and get them to a level of sophistication that would work with the ERP system. The Orion consulting team grew to include day-to-day support for other areas like A/P while our primary consultant moved into the role of leading the migration to the main ERP system.",
      clientOutcomes: "Orion’s consultant managed the process with great success and allowed the client to meet the reporting deadlines while satisfying all key constituents including the Board of Directors and the external auditors. The Orion consultant also helped our client in the selection of several accounting candidates for full-time roles. Our consultant helped transition the new corporate controller through the following year’s Q1 financials, and was asked back to provide technical support for Q2."
    },
    {
      id: "financialModeling", title: "Financial Modeling",
      clientIssue: "Our client is a not-for-profit entity that provides membership based services for a downtown business district. The client was looking to add significant services to the portfolio and needed to develop a pricing model that was fair to the members and provided sufficient revenue to support the new services.",
      orionSolution: "Orion brought in a consultant with strong data analysis skills and a track record of providing insight on challenging business issues. The consultant developed a spectrum of assessment scenarios to support the annual budget.",
      clientOutcomes: "Orion’s consultant created a technical business plan and summary that was presented to the City Council and corporate stakeholders."
    }
  ]

}
