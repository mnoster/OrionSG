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
    EmailService,
    BullhornService,
} from './_services/index';

import { AlertComponent } from './_directives/index';
import { ApplyComponent } from './apply/index';
import { JobsComponent } from './jobs/index';
import { JobDescriptionComponent } from './job_description/index';
import { NavigationComponent } from './navigation/index';
import { SubnavigationComponent } from './subnavigation/index';


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
        NavigationComponent,
        SubnavigationComponent,
        JobsComponent,
        JobDescriptionComponent,
        SafeHtmlPipe,
    ],
    providers: [
        AlertService,
        BullhornService,
        EmailService,
        BaseRequestOptions
    ],
    bootstrap: [AppComponent]
})

export class AppModule { }
