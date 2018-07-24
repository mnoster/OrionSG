import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  moduleId: module.id,
  templateUrl: 'contract_staffing.component.html',
  styleUrls: ['contract_staffing.component.css', '../app.component.css',]
})

export class ContractStaffingComponent {
  title = "Contract Staffing";

  examples = [
    {
      id: "accountingFinance", title: "Accounting & Finance",
      list: [
        "Corporate Controller, publicly traded corporation", "Financial Reporting Manager",
        "Financial Analyst", "Tax Compliance Expert", "Accounting Manager",
        "Senior Accountant", "Accounts Payable/Accounts Receivable Specialist", "Payroll"
      ]
    },
    {
      id: "auditRiskCompliance", title: "Audit, Risk & Compliance",
      list: [
        "Internal Audit Manager", "Sarbanes-Oxley (SOX) Auditor",
        "Construction Audit Manager", "Forensic Accounting Specialist",
        "Mortgage Compliance Auditor"
      ]
    },
    {
      id: "itAuditSecurity", title: "IT Audit & Security",
      list: [
        "IT Audit Manager", "IT Security Manager", "SOX IT Auditor", "IT Audit Supervisor"
      ]
    },
    {
      id: "humanResources", title: "Human Resources",
      list: [
        "Talent Acquisition Specialist", "Compensation Analyst",
        "HR Compliance Auditor", "Operations Coordinator"
      ]
    },
    {
      id: "informationTechnology", title: "Information Technology",
      list: [
        "Project Manager",
        "Integration Project Manager",
        "Business Continuity Manager"
      ]
    }
  ]
}
