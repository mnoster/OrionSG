import { Component } from '@angular/core';

@Component({
    moduleId: module.id,
    templateUrl: 'itauditsecurity.component.html',
    styleUrls: ['itauditsecurity.component.css',
                '../app.component.css',]

})

export class ItAuditSecurityComponent {
  title = "IT Audit and Security";

  examples = [
    {
      id: "globalITSecurity", title: "Global IT Security Program Implementation",
      clientIssue: "Our client, a multi-billion dollar global manufacturer, recognized the growing threats of IT hacking, ransomware, identity theft, and other security issues. The client’s executive management had an outside consulting firm do an independent assessment of the security program’s maturity and level and set a target to improve this rating within a year. Our client developed a long-term plan to meet this goal and reached out to Orion to bring in a highly experienced leader to drive the project forward.",
      orionSolution: "Orion brought in a consultant with extensive experience in implementing global security programs, both from the policy and procedure standpoint and the actual automated tools used by top organizations. We reviewed the project and prioritized key areas, set up a reporting cadence with senior management, and implemented the strategic security vision.",
      clientOutcomes: "The project resulted in many accomplishments such as structuring the security team, documenting current state, creating policies, procedures and work instructions, identifying strategic and tactical direction given the global threat landscape, assessing the existing environment for potential risks, performing gap analyses and recommending corrective actions, and working in conjunction with software development teams to ensure SDLC best practices relating to secure code. At the end of the year, a follow up assessment from the outside consulting firm indicated the maturity level of the client’s security program had moved higher than the targets set by the executive team."
    },
    {
      id: "itAuditCoSourcing", title: "IT Audit Co-SourcingIT Audit Co-Sourcing",
      clientIssue: "Our client, a global manufacturing and distribution company, was going through a major transition that involved selling a division and moving their world headquarters. These changes caused a number of employees to seek other employment rather than move, threatening the ability of the internal audit team to complete their schedule and meet their Sarbanes-Oxley (SOX) deadlines.",
      orionSolution: "Orion brought in a team on internal audit and IT audit consultants on a co-sourced basis. The consultants carried CIA and CISA designations and each had more than 15 years of experience. The team had the experience to act as managers when needed and willingness to work as staff when direct work needed to be done. At one point Orion consultants represented half of the entire audit team.",
      clientOutcomes: "With Orion’s help the client completed the entire audit schedule and met all Sarbanes- Oxley (SOX) deadlines. Orion provided a stabilizing presence that allowed for a smooth transition to a new head of audit. In addition, we devised a flexible plan that allowed us to ramp our team up and down as needed to help the client control project costs."
    },
    {
      id: "soxItIntegration", title: "SOX IT Integration",
      clientIssue: "Our client, a publicly-traded manufacturing company, acquired one of their primary competitors. The competitor was privately held and did not have an existing Sarbanes- Oxley (SOX) program. Our client needed a team to document processes, assessment the control environment and determine the effectiveness on internal controls – all in time for the first year financial reporting deadlines.",
      orionSolution: "Orion worked with the client to develop a project plan and provided a highly experienced team of consultants with extensive SOX and SOX IT experience. The team carried CIA, CPA and CISA designations and averaged more than 20 years of experience. We developed a multi-phased program that started with process and control documentation, initial evaluation of control design and effectiveness, and then moved into full testing of control effectiveness, reporting of deficiencies, and working with management to remediate and retest failed controls.",
      clientOutcomes: "Orion’s experienced team was so efficient that each phase was completed under budget. The client used the extra time to have our team work on other projects including an audit of a manufacturing site and review of controls surrounding an ERP implementation."
    },
    {
      id: "vendorSecurityReview", title: "Vendor Security Review",
      clientIssue: "Our client, a large regional bank, needed to do a comprehensive security and controls review across their vendor group.  The bank’s compliance organization was heavily tasked keeping up with all the regulatory changes and needed a firm to come in and develop a plan to get the vendor reviews current.",
      orionSolution: "Orion provided an IT security consultant with extensive experience in the banking industry, and particular experience in IT vendor management. The consultant developed a multi- pronged approach for the project. The first phase included a review of SOC reports and determination of the impact of identified weaknesses.  For the second phase, our consultant went to a variety of hacker sites where information on hacked companies is shared.  The consultant learned that the majority of our client’s vendors had been hacked, and many of the hacked services had the potential to impact our client.  In many cases these vendors had not communicated the exposure.",
      clientOutcomes: "Orion completed the evaluation of each IT vendor and got the client current with all their key relationships. In addition, we built a report that ranked the vendors by the degree of exposure risk and the extent of identified hacking activity to allow management to make informed decisions about which vendors should remain and which required remediation to stay with the client."
    },
  ]
}
