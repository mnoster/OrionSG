import { Component, OnInit } from '@angular/core';

import { User } from '../_models/index';
import { UserService } from '../_services/index';

@Component({
    moduleId: module.id,
    templateUrl: 'ourteam.component.html',
    styleUrls: ['ourteam.component.css',
                '../app.component.css',
                '../font-awesome/css/fontawesome-all.min.css']
})


export class OurteamComponent implements OnInit {
    constructor(private userService: UserService) {
        this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
    }

    currentUser: User;
    users: User[] = [];
    team = [
        {
            name: 'Kris Flynn',
            role: 'Managing Partner and Co-Founder',
            email: "kflynn@orionsolutionsgroup.net",
            image: 'kris_profile.jpg',
            linkedIn: 'https://www.linkedin.com/in/kris-flynn-26418162/',
            summary: "Kris brings more than 15 years experience in client service, project management, and IT services. Kris serves as Orion’s Managing Partner and in this role ensures we are bringing the right internal resources to each client need. In addition to directly managing two of Orion’s largest clients, Kris leads our internal functions like HR and accounting. Kris earned her BA in Finance and MBA in Supply Chain Management from Michigan State University. Prior to Orion, Kris led global development teams for the production order management systems of a major automotive OEM. She also started several small internet based companies.",
        },
        {
            name: 'Dave Flynn',
            role: 'Partner and Co-Founder',
            email: "dflynn@orionsolutionsgroup.net",
            image: 'dave_profile.jpg',
            linkedIn: 'http://www.linkedin.com/pub/dave-flynn/0/73a/73b',
            summary: "Dave brings more than 20 years of experience delivering client solutions across a variety of industries including automotive, banking, insurance, retail, and government. In addition to managing our consulting and staffing practices, Dave is a hands-on leader with a broad range of project experience across industries and functional areas. Dave earned his BA in accounting and his MBA from Michigan State University.Dave has earned the CPA and CISA designations, and sits on the board of Junior Achievement of Southeastern Michigan and volunteers on the finance committee of the Michigan Humane Society. Prior to Orion, Dave led several start up consulting practices, taking them from small teams to groups of over 100 people."
        },
        {
            name: 'Kevin Suksi',
            role: 'Partner and Co-Founder',
            email: "ksuski@orionsolutionsgroup.net",
            image: 'kevin_profile.jpg',
            linkedIn: 'https://www.linkedin.com/in/kevinsuksi/',
            summary: "Kevin brings more than 15 years of experience in professional recruiting. Kevin leads the recruiting team to support all our service lines. Over his career Kevin has developed the ability to bring the right person to the table through relationship building, intelligent research, and relentless effort. Kevin earned his BBA in Accounting from the University of Michigan-Dearborn. Prior to his career as a recruiter, Kevin earned his CPA license while working at a major regional CPA firm and worked in corporate accounting."
        },
        {
            name: 'Nicole Heger',
            role: 'HR Manager and Recruiter',
            email: "kheger@orionsolutionsgroup.net",
            image: 'nicole_profile.jpg',
            linkedIn: 'https://www.linkedin.com/in/nicole-heger-phr-a8b45b4/',
            summary:"Nicole Heger has more than 10 years of experience in Human Resources management and recruiting. Nicole understands the recruiting process from the client’s perspective and uses this understanding to help us constantly improve our processes. Nicole’s broad recruiting background includes sales & marketing, supply chain, accounting & finance, HR, and audit. Nicole also acts as our internal HR Manager and works with our consultants and our office team as our HR interface. Nicole earned her BS in Human Resources Development and from Oakland University and holds the Professional in Human Resources certification (PHR)."
        },
        {
            name: 'Kristyn Van Uden',
            role: 'Professional Recruiter',
            email: "kvanuden@orionsolutionsgroup.net",
            image: 'kristyn_profile.jpeg',
            height: '340px',
            linkedIn: 'https://www.linkedin.com/in/kristyn-van-uden-4b2376126/',
            summary:"Kristyn joined Orion as an intern and made such an impact we brought her onto the team in 2017 as a Professional Recruiter. Her knowledge of HR and skill with social media helps her find qualified individuals who can be successful in our clients’ environments. She prides herself with making connections with candidates and helping them progress in their careers. Kristyn earned her BA in Human Resources Development from Oakland University. Kristyn is an active volunteer at the Warren Community Center where she works with special needs children."

        },
        {
            name: 'Bob',
            role: 'The Dog',
            email: '',
            image: 'bob_profile.jpeg',
            height: '340px',
            linkedIn: '',
            summary:"Bob joined the Orion team in 2017, coming to us from a local rescue shelter.  Bob has excellent people skills and spends most of his day visiting with the rest of team (particularly if they are eating something)."
        }

    ]

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
