"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var http_1 = require("@angular/http");
var platform_browser_1 = require("@angular/platform-browser");
var forms_1 = require("@angular/forms");
var http_2 = require("@angular/http");
var core_1 = require("@angular/core");
var app_routing_1 = require("./app.routing");
var index_1 = require("./_pipes/index");
//COMPONENTS AND SERVICES
var app_component_1 = require("./app.component");
var index_2 = require("./_services/index");
var index_3 = require("./accountingfinance/index");
var index_4 = require("./_directives/index");
var index_5 = require("./apply/index");
var index_6 = require("./_guards/index");
var index_7 = require("./auditrisk/index");
var index_8 = require("./contact/index");
var index_9 = require("./contractstaffing/index");
var index_10 = require("./history/index");
var index_11 = require("./consulting/index");
var index_12 = require("./professionalrecruiting/index");
var index_13 = require("./projectdelivery/index");
var index_14 = require("./itauditsecurity/index");
var index_15 = require("./humanresources/index");
var index_16 = require("./professionalsearch/index");
var index_17 = require("./retainedsearch/index");
var index_18 = require("./contingentsearch/index");
var index_19 = require("./login/index");
var index_20 = require("./register/index");
var index_21 = require("./home/index");
var index_22 = require("./jobs/index");
var index_23 = require("./job_description/index");
var index_24 = require("./navigation/index");
var index_25 = require("./ourteam/index");
var index_26 = require("./subnavigation/index");
var index_27 = require("./vision/index");
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [
                platform_browser_1.BrowserModule,
                forms_1.FormsModule,
                http_2.HttpModule,
                forms_1.ReactiveFormsModule,
                app_routing_1.routing
            ],
            declarations: [
                app_component_1.AppComponent,
                index_5.ApplyComponent,
                index_4.AlertComponent,
                index_3.AccountingFinanceComponent,
                index_7.AuditRiskComponent,
                index_9.ContractStaffingComponent,
                index_24.NavigationComponent,
                index_26.SubnavigationComponent,
                index_22.JobsComponent,
                index_23.JobDescriptionComponent,
                index_21.HomeComponent,
                index_8.ContactComponent,
                index_25.OurteamComponent,
                index_27.VisionComponent,
                index_10.HistoryComponent,
                index_11.ConsultingComponent,
                index_12.ProfessionalRecruitingComponent,
                index_13.ProjectDeliveryComponent,
                index_14.ItAuditSecurityComponent,
                index_15.HumanResourcesComponent,
                index_16.ProfessionalSearchComponent,
                index_17.RetainedSearchComponent,
                index_18.ContingentSearchComponent,
                index_19.LoginComponent,
                index_20.RegisterComponent,
                index_1.SafeHtmlPipe
            ],
            providers: [
                index_6.AuthGuard,
                index_2.AlertService,
                index_2.AuthenticationService,
                index_2.BullhornService,
                index_2.EmailService,
                index_2.UserService,
                index_2.ContentService,
                http_1.BaseRequestOptions
            ],
            bootstrap: [app_component_1.AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map