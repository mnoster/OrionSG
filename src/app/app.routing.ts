import { Routes, RouterModule } from '@angular/router';
import { AccountingFinanceComponent } from "./accountingfinance/index";
import { AuditRiskComponent } from "./auditrisk/index";
import { ApplyComponent } from "./apply/index";
import { ContractStaffingComponent } from './contractstaffing/index'
import { HomeComponent } from './home/index';
import { ContactComponent } from './contact/index';
import { HistoryComponent } from './history/index';
import { ConsultingComponent } from './consulting/index';
import { ProfessionalRecruitingComponent } from './professionalrecruiting/index';
import { ProjectDeliveryComponent } from './projectdelivery/index';
import { ItAuditSecurityComponent } from './itauditsecurity/index';
import { HumanResourcesComponent } from './humanresources/index';
import { ProfessionalSearchComponent } from './professionalsearch/index';
import { RetainedSearchComponent } from './retainedsearch/index';
import { ContingentSearchComponent } from './contingentsearch/index';
// import { LoginComponent } from './login/index';
// import { RegisterComponent } from './register/index';
import { JobsComponent } from './jobs/index';
import { JobDescriptionComponent } from './job_description/index';
import { OurteamComponent } from './ourteam/index';
import { VisionComponent } from './vision/index';
import { ClientTestimonials } from './clienttestimonials/index';
import { CandidateTestimonials } from './candidatetestimonials/index';
import { ProfessionalRecTestimonials } from './professionalrectestimonials/index';
import { SupplychainComponent } from './supplychain/index';

import { AuthGuard } from './_guards/index';
import { InsightsComponent } from './insights';

const appRoutes: Routes = [
    // { path: '', component: HomeComponent, canActivate: [AuthGuard] },
    { path: 'apply/:id', component: ApplyComponent },
    { path: '', component: HomeComponent },
    { path: 'accounting-finance', component: AccountingFinanceComponent },
    { path: 'audit-risk', component: AuditRiskComponent },
    { path: 'contact', component: ContactComponent },
    { path: 'contract-staffing', component: ContractStaffingComponent },
    { path: 'insights', component: InsightsComponent },
    { path: 'our-team', component: OurteamComponent },
    { path: 'vision', component: VisionComponent },
    { path: 'history', component: HistoryComponent },
    { path: 'consulting', component: ConsultingComponent },
    { path: 'project-delivery', component: ProjectDeliveryComponent },
    { path: 'professional-recruiting', component: ProfessionalRecruitingComponent },
    { path: 'it-audit-security', component: ItAuditSecurityComponent },
    { path: 'human-resources', component: HumanResourcesComponent },
    { path: 'professional-search', component: ProfessionalSearchComponent },
    { path: 'retained-search', component: RetainedSearchComponent },
    { path: 'contingent-search', component: ContingentSearchComponent },
    // { path: 'login', component: LoginComponent },
    // { path: 'register', component: RegisterComponent },
    { path: 'jobs', component: JobsComponent },
    { path: 'jobs/:id', component: JobDescriptionComponent },
    { path: 'client-testimonials', component: ClientTestimonials },
    { path: 'candidate-testimonials', component: CandidateTestimonials },
    { path: 'professional-rec-testimonials', component: ProfessionalRecTestimonials },
    { path: 'supplychain', component: SupplychainComponent },

    // otherwise redirect to home
    { path: '**', redirectTo: '' }
];

export const routing = RouterModule.forRoot(appRoutes);
