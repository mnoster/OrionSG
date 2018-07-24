import { Component } from '@angular/core';

@Component({
  moduleId: module.id,
  templateUrl: 'professional_recruiting.component.html',
  styleUrls: ['professional_recruiting.component.css', '../app.component.css',]

})

export class ProfessionalRecruitingComponent {
  title = "Orion as Your Recruiter";

  examples = [
    {
      id : "accountingandfinance", title: "Accounting & Finance",
      list: [
        "VP of Finance", "Corporate Controller",
        "Tax Director", "Director of Financial Reporting",
        "Financial Analyst", "VP Technical Accounting",
        "Finance Manager", "Accounting Manager",
        "Global Treasury Senior Analyst", "Tax Manager",
        "Senior Manager - Payroll Operations", "Senior International Tax Analyst",
        "Regional Accountant", "Treasury Operations Manager",
        "State Tax Manager", "Cost Analyst"
      ]
    },
    {
      id : "auditriskcompliance", title: "Audit, Risk & Compliance",
      list: [
        "Internal Audit Director", "Internal Control (SOX) Manager",
        "Regulatory Services Manager", "Fraud & Financial Audit Manager",
        "Senior Compliance Auditor", "Senior Internal Auditor",
        "AML & Anti-Corruption Compliance Analyst", "Document Compliance Specialist"
      ]
    },
    {
      id : "itauditsecurity", title: "IT Audit & Security",
      list: [
        "IT Audit Manager", "Data Privacy & Protection Manager",
        "Senior Security Specialist", "IT Auditor",
        "SAP IT Audit Manager", "Advanced IT Auditor"
      ]
    },
    {
      id : "humanresources", title: "Human Resources",
      list: [
        "Global Function HR Business Partner", "Compensation Analyst",
        "Training Design Manager", "Process Excellence Service Design Manager",
        "Instructional Design Specialist", "Senior Learning & Development Specialist",
        "Process Excellence Senior Manager"
      ]
    },
    {
      id : "salesandmarketing", title: "Sales & Marketing",
      list: [
        "VP of Strategy", "Managing Director",
        "Inside Sales", "Business Development Associate"
      ]
    },
    {
      id : "supplychain", title: "Supply Chain",
      list: [
        "Senior Supply Chain Analyst", "Manager of Supply Chain Systems",
        "Buyer"
      ]
    },
    {
      id : "dataanalytics", title: "Data Analytics",
      list: [
        "Risk Analyst – Advanced Analytics", "Senior Commercial Risk Analyst",
        "Senior Analyst – Loss Forecasting and Reserves", "Risk Administration and PMO Specialist",
        "Customer Experience Research Analyst", "Analytics Solution Analyst",
        "Actuarial Analyst"
      ]
    },
    {
      id : "informationtechnology", title: "Information Technology",
      list: [
        "Data Privacy & Protection Manager", "PMO Transition Senior Manager",
        "Data Warehouse Analyst", "Senior Security Analyst",
        "Manager of Supply Chain Systems", "PMO System Administrator",
        "Senior Network Engineer"
      ]
    },
    {
      id: "engineering", title: "Engineering",
      list: [
        "Engineering Manager"
      ]
    }
  ]
}
