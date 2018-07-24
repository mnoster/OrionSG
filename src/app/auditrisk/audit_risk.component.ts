import { Component } from '@angular/core';

@Component({
    moduleId: module.id,
    templateUrl: 'audit_risk.component.html',
    styleUrls: ['audit_risk.component.css', '../app.component.css']

})

export class AuditRiskComponent {
  title = "Audit, Risk and Compliance";

  examples = [
    {
      id: "internalAuditCoSourcing", title: "Internal Audit Co-Sourcing",
      clientIssue: "Our client, a global manufacturing and distribution company, was going through a major transition that involved selling a division and moving their world headquarters. These changes caused a number of employees to seek other employment rather than move, threatening the ability of the internal audit team to complete their schedule and meet their Sarbanes-Oxley (SOX) deadlines.",
      orionSolution: "Orion brought in a team on internal audit and IT audit consultants on a co-sourced basis. The consultants carried CIA and CISA designations and each had more than 15 years of experience. The team had the experience to act as managers when needed and willingness to work as staff when direct work needed.",
      clientOutcomes: "With Orion’s help the client completed the entire audit schedule and met all Sarbanes-Oxley (SOX) deadlines. Orion provided a stabilizing presence that allowed for a smooth transition to a new head of audit. In addition, we devised a flexible plan that allowed us to ramp our team up and down as needed to help the client control project costs."
    },
    {
      id: "soxIntegration", title: "SOX Integration",
      clientIssue: "Our client, a publicly-traded manufacturing company, acquired one of their primary competitors. The competitor was privately held and did not have an existing Sarbanes-Oxley (SOX) program. Our client needed a team to document processes, assessment the control environment and determine the effectiveness on internal controls – all in time for the first year financial reporting deadlines.",
      orionSolution: "Orion worked with the client to develop a project plan and provided a highly experienced team of consultants with extensive SOX and SOX IT experience. The team carried CIA, CPA and CISA designations and averaged more than 20 years of experience. We developed a multi-phased program that started with process and control documentation, initial evaluation of control design and effectiveness, and then moved into full testing of control effectiveness, reporting of deficiencies, and working with management to remediate and retest failed controls.",
      clientOutcomes: "Orion’s experienced team was so efficient that each phase was completed under budget. The client used the extra time to have our team work on other projects including an audit of a manufacturing site and review of controls surrounding an ERP implementation."
    },
    {
      id: "fraudInvestigation", title: "Fraud Investigation / Forensic Accounting",
      clientIssue: "Our client believed there was a potential fraud in a key area and wanted to have an outside party review the information and determine the extent of fraudulent activities.",
      orionSolution: "Orion provided a CPA with many years of forensic accounting experience. The consultant developed a multistep review process to go over expense records, corporate credit card usage, and tracking of assets through online sales platforms. The consultant then worked with the state prosecutor’s office and the insurance adjuster to move the case to the next step.",
      clientOutcomes: "Our forensic accounting consultant identified dozens of fraudulent transactions that pushed the cost of the fraud into six digits. The work resulted in a criminal investigation and a full recovery from the insurance company. Each transaction was documented to a level that led to no disputes on the amount of fraudulent activity."
    },
    {
      id: "constructionAudit", title: "Construction Audit",
      clientIssue: "Our client began a series of multi-million dollar construction projects throughout the Midwestern United States. Our client’s internal audit team wanted to co-source with a firm that could bring in a construction expert to review contract compliance, cost, and internal controls.",
      orionSolution: "Orion brought in a specialized consultant with more than twenty years of experience in construction and forensic audits to do a risk assessment, develop an audit program, and review the appropriate contracts, invoices and other documents.",
      clientOutcomes: "Orion’s consultant identified several contractual deficiencies and worked with the client’s contract managers to ensure the issues were addressed. The audit also resulted in recommendations for properly capturing historical cost information and developing a budget framework to assess future projects against a baseline. The client now has a repeatable audit program that will be used by their internal personnel to assess future construction projects. Both the client’s internal audit manager and the manager of the construction team commented on our consultant’s deep construction knowledge and the value of the review."
    },
    {
      id: "qualityAssuranceReview", title: "Quality Assurance Review (QAR)",
      clientIssue: "Our client, a major regional insurance firm, wanted an external assessment of the Internal Audit function using the Institute of Internal Auditors (IIA) Quality Assurance Review process (QAR).",
      orionSolution: "Orion built a team that included a former Big 4 accounting partner and former chief risk officer. We developed and executed a customized project plan that included executive and Board interviews, staff surveys, and direct reviews of the audit process, risk assessments, issue reporting and follow up, staff competence and education, etc.",
      clientOutcomes: "Orion delivered a comprehensive report on the Internal Audit group’s compliance with IIA standards as well as the overall effectiveness of the group. We also provided best practices feedback and suggested several opportunities for improvement. The report was well received by both the Internal Audit group and the Audit Committee of the Board of Directors."
    },
    {
      id: "documentReview ", title: "Document Review",
      clientIssue: "Our client is a leader in the field of e-Discovery and digital forensics.  They are frequently called upon to remediate data breaches for major organizations.  Our client took on a project that required a document review that covered approximately 500,000 pages of material and needed to be completed in a matter of weeks.",
      orionSolution: "Orion ramped up a team of 15 people within a week, including interviews and background checks.  We worked closely with our client to manage team expectations and monitor performance.",
      clientOutcomes: "With Orion’s help the client completed the project on time and on budget.  We have since been asked back for additional data breach reviews, and were able to return many of the same consultants each time."
    }
  ]

}
