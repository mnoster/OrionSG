import { BaseRequestOptions } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { NgModule } from '@angular/core';
import { routing } from './app.routing';
import { SafeHtmlPipe } from "./_pipes/index";

//COMPONENTS AND SERVICES
import { AppComponent } from './app.component';
import { 
    AlertService, 
    // AuthenticationService, 
    EmailService, 
    // UserService, 
    BullhornService, 
    // ContentService 
} from './_services/index';

import { AccountingFinanceComponent } from "./accountingfinance/index";
import { AlertComponent } from './_directives/index';
import { ApplyComponent } from './apply/index';
import { AuthGuard } from './_guards/index';
import { AuditRiskComponent } from "./auditrisk/index";
import { ContactComponent } from './contact/index'
import { ContractStaffingComponent } from './contractstaffing/index'
import { HistoryComponent } from './history/index';
import { ConsultingComponent } from './consulting/index';
import { ProfessionalRecruitingComponent } from './professionalrecruiting/index'
import { ProjectDeliveryComponent } from './projectdelivery/index';
import { ItAuditSecurityComponent } from './itauditsecurity/index';
import { HumanResourcesComponent } from './humanresources/index';
import { ProfessionalSearchComponent } from './professionalsearch/index';
import { RetainedSearchComponent } from './retainedsearch/index';
import { ContingentSearchComponent } from './contingentsearch/index';
// import { LoginComponent } from './login/index';
import { RegisterComponent } from './register/index';
import { HomeComponent } from './home/index';
import { JobsComponent } from './jobs/index';
import { JobDescriptionComponent } from './job_description/index';
import { NavigationComponent } from './navigation/index';
import { OurteamComponent } from './ourteam/index';
import { SubnavigationComponent } from './subnavigation/index';
import { VisionComponent } from './vision/index';
import { ClientTestimonials } from './clienttestimonials/index';
import { CandidateTestimonials } from './candidatetestimonials/index';
import { ProfessionalRecTestimonials } from './professionalrectestimonials/index'

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        ReactiveFormsModule,
        routing
    ],
    declarations: [
        AppComponent,
        ApplyComponent,
        AlertComponent,
        AccountingFinanceComponent,
        AuditRiskComponent,
        ContractStaffingComponent,
        NavigationComponent,
        SubnavigationComponent,
        JobsComponent,
        JobDescriptionComponent,
        HomeComponent,
        ContactComponent,
        OurteamComponent,
        VisionComponent,
        HistoryComponent,
        ConsultingComponent,
        ProfessionalRecruitingComponent,
        ProjectDeliveryComponent,
        ItAuditSecurityComponent,
        HumanResourcesComponent,
        ProfessionalSearchComponent,
        RetainedSearchComponent,
        ContingentSearchComponent,
        // LoginComponent,
        // RegisterComponent,
        SafeHtmlPipe,
        ClientTestimonials,
        CandidateTestimonials,
        ProfessionalRecTestimonials
    ],
    providers: [
        // AuthGuard,
        AlertService,
        // AuthenticationService,
        BullhornService,
        EmailService,
        // UserService,
        // ContentService,
        BaseRequestOptions
    ],
    bootstrap: [AppComponent]
})

export class AppModule { }
