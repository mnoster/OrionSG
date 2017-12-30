import { Component, OnInit } from '@angular/core';

import { User } from '../_models/index';
import { UserService } from '../_services/index';

@Component({
    moduleId: module.id,
    templateUrl: 'ourteam.component.html',
    styleUrls: ['ourteam.component.css',
                '../app.component.css']

})

export class OurteamComponent implements OnInit {
    currentUser: User;
    users: User[] = [];

    summaryKrisFlynn1 = "Kris brings more than 15 years experience in client "
    + "service, project management, and IT services. In addition to working "
    + "directly with our clients, Kris also acts as our Chief Operating "
    + "Officer, handling all our internal infrastructure and go-to market "
    + "capabilities. ";

    summaryKrisFlynn2 = "Kris earned her BA in Finance and MBA in Supply Chain "
    + "Management from Michigan State University. Prior to Orion, Kris led "
    + "global development teams for the production order management systems of "
    + "a major automotive OEM.";

    summaryDaveFlynn1 = "Dave brings more than 20 years of experience delivering "
    + "client solutions across a variety of industries including automotive, "
    + "banking, insurance, and government. In addition to managing consulting "
    + "and staffing practices, Dave is a hands-on leader with a broad range of "
    + "project experience across industries and functional areas. ";

    summaryDaveFlynn2 = "Dave earned his BA in accounting and his MBA from Michigan "
    + "State University. Dave has earned the CPA and CISA designations, and "
    + "sits on the boards of Junior Achievement of Southeastern Michigan and the "
    + "Detroit Chapter of the Institute of Internal Auditors.";

    summaryDaveFlynn3 = "In his role as President, Dave is responsible for the "
    + "performance of all our service lines and has direct management "
    + "responsibility for our consulting and staffing business.";

    summaryKevinSuksi1 = "As the Vice President of Recruiting, Kevin focuses on "
    + "identifying and recruiting professionals for clients across all our "
    + "service lines. For more than a decade, Kevin has developed the ability to "
    + "bring the right person to the table through relationship building, "
    + "intelligent research, and relentless effort.";

    summaryKevinSuksi2 = "Kevin earned his BBA in Accounting from the University "
    + "of Michigan-Dearborn. Prior to his career as a recruiter, Kevin earned his "
    + "CPA license while working at a major regional CPA firm and worked in "
    + "corporate accounting.";

    summaryNicoleHeger1 = "Nicole Heger has more than 10 years of experience in "
    + "Human Resources management and recruiting. Nicole understands the "
    + "recruiting process from the client’s perspective and uses this understanding "
    + "to help us constantly improve our processes. Nicole’s broad recruiting "
    + "background includes sales &amp; marketing, supply chain, accounting & "
    + "finance, HR, and audit.";

    summaryNicoleHeger2 = "Nicole earned her BS in Human Resources Development "
    + "and from Oakland University and holds the Professional in Human Resources "
    + "certification (PHR).";

    constructor(private userService: UserService) {
        this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
    }

    ngOnInit() {
        // this.loadAllUsers();
    }

    deleteUser(id: number) {
        // this.userService.delete(id).subscribe(() => { this.loadAllUsers() });
    }

    private loadAllUsers() {
        // this.userService.getAll().subscribe(users => { this.users = users; });
    }
}
