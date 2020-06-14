import { Routes, RouterModule } from '@angular/router';
import { ApplyComponent } from "./apply/index";
import { JobsComponent } from './jobs/index';
import { JobDescriptionComponent } from './job_description/index';

const appRoutes: Routes = [
    { path: 'apply/:id', component: ApplyComponent },
    { path: 'jobs', component: JobsComponent },
    { path: 'jobs/:id', component: JobDescriptionComponent },

    // otherwise redirect to home
    { path: '**', redirectTo: 'jobs' }
];

export const routing = RouterModule.forRoot(appRoutes);
