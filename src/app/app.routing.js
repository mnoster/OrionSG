"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var router_1 = require("@angular/router");
var index_1 = require("./accountingfinance/index");
var index_2 = require("./auditrisk/index");
var index_3 = require("./apply/index");
var index_4 = require("./contractstaffing/index");
var index_5 = require("./home/index");
var index_6 = require("./contact/index");
var index_7 = require("./history/index");
var index_8 = require("./consulting/index");
var index_9 = require("./professionalrecruiting/index");
var index_10 = require("./projectdelivery/index");
var index_11 = require("./itauditsecurity/index");
var index_12 = require("./humanresources/index");
var index_13 = require("./professionalsearch/index");
var index_14 = require("./retainedsearch/index");
var index_15 = require("./contingentsearch/index");
var index_16 = require("./login/index");
var index_17 = require("./register/index");
var index_18 = require("./jobs/index");
var index_19 = require("./job_description/index");
var index_20 = require("./ourteam/index");
var index_21 = require("./vision/index");
var appRoutes = [
    // { path: '', component: HomeComponent, canActivate: [AuthGuard] },
    { path: 'apply/:id', component: index_3.ApplyComponent },
    { path: '', component: index_5.HomeComponent },
    { path: 'accountingfinance', component: index_1.AccountingFinanceComponent },
    { path: 'auditrisk', component: index_2.AuditRiskComponent },
    { path: 'contact', component: index_6.ContactComponent },
    { path: 'contractstaffing', component: index_4.ContractStaffingComponent },
    { path: 'ourteam', component: index_20.OurteamComponent },
    { path: 'vision', component: index_21.VisionComponent },
    { path: 'history', component: index_7.HistoryComponent },
    { path: 'consulting', component: index_8.ConsultingComponent },
    { path: 'projectdelivery', component: index_10.ProjectDeliveryComponent },
    { path: 'professionalrecruiting', component: index_9.ProfessionalRecruitingComponent },
    { path: 'itauditsecurity', component: index_11.ItAuditSecurityComponent },
    { path: 'humanresources', component: index_12.HumanResourcesComponent },
    { path: 'professionalsearch', component: index_13.ProfessionalSearchComponent },
    { path: 'retainedsearch', component: index_14.RetainedSearchComponent },
    { path: 'contingentsearch', component: index_15.ContingentSearchComponent },
    { path: 'login', component: index_16.LoginComponent },
    { path: 'register', component: index_17.RegisterComponent },
    { path: 'jobs', component: index_18.JobsComponent },
    { path: 'jobs/:id', component: index_19.JobDescriptionComponent },
    // otherwise redirect to home
    { path: '**', redirectTo: '' }
];
exports.routing = router_1.RouterModule.forRoot(appRoutes);
//# sourceMappingURL=app.routing.js.map