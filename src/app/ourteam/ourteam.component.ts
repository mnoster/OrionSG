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
    constructor() {
        // this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
    }
    title="Our Team"
    currentUser: User;
    users: User[] = [];
    team = [
        {
            name: 'Kris Flynn',
            role: 'Managing Partner and Co-Founder',
            email: "kflynn@orionsolutionsgroup.net",
            image: 'kris_profile.jpg',
            linkedIn: 'https://www.linkedin.com/in/kris-flynn-26418162/',
            summary: "Kris brings more than 15 years experience in client service, project management, and IT services. Kris serves as Orion’s Managing Partner and in this role ensures we are bringing the right internal resources to each client need. In addition to directly managing two of Orion’s largest clients, Kris leads our internal functions like HR and accounting. Kris earned her BA in Finance and MBA in Supply Chain Management from Michigan State University. Prior to Orion, Kris led global development teams for the production order management systems of a major automotive OEM.",
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
            email: "ksuksi@orionsolutionsgroup.net",
            image: 'kevin_profile.jpg',
            linkedIn: 'https://www.linkedin.com/in/kevinsuksi/',
            summary: "Kevin brings more than 15 years of experience in professional recruiting. Kevin leads the recruiting team to support all our service lines. Over his career Kevin has developed the ability to bring the right person to the table through relationship building, intelligent research, and relentless effort. Kevin earned his BBA in Accounting from the University of Michigan-Dearborn. Prior to his career as a recruiter, Kevin earned his CPA license while working at a major regional CPA firm and worked in corporate accounting."
        },
        {
            name: 'Dave Porter',
            role: 'Partner',
            email: "dporter@orionsolutionsgroup.net",
            image: 'dave_porter_profile.png',
            linkedIn: 'https://www.linkedin.com/in/david-porter-18aa105/',
            summary: "Dave brings over 25 years of leadership experience in the logistics/supply chain industry.  Dave served as President of Hub Los Angeles and Hub Golden Gate, held numerous sales leadership roles on a regional and national basis, and served as EVP of Supply Chain Solutions (3PL and Truck Brokerage), among other roles for Hub Group.  Most recently, Dave served as CEO for approximately 5 years at Rail Delivery Services, an award-winning drayage, trucking/dedicated, and consolidation company in Los Angeles.  Dave earned his BA from Western Michigan University and MBA from the University of Redlands.  Dave serves on the California State University Fullerton School of Operations and Supply Chain Management Advisory Board and is a member of numerous industry associations."
        },
        {
            name: 'Mario Morales',
            role: 'Director',
            email: "mmorales@orionsolutionsgroup.net",
            image: 'mario_profile.jpeg',
            linkedIn: 'https://www.linkedin.com/in/mario-a-morales-007a791/',
            summary: "Mario Brings over 35 years of experience in the Transportation/Logistics/Supply Chain industry.  Mario spent almost 30 years as a Senior Account Executive at CSX Railroad, served as Vice President of Corporate Solutions at Hub Group, and as an Account Manager at ABF Freight.  Mario served as Chairman of the Board and President of the Los Angeles Transportation Club and is a member or serves on the boards of numerous industry associations.  Mario has been married 30 years to Lydia who recently retired after 30 years at YRC Freight. They have three children who have all completed their Masters degrees including a daughter who is presently an officer in the United States Air Force serving overseas."
        },
        {
            name: 'Nicole Heger',
            role: 'HR Manager and Recruiter',
            email: "nheger@orionsolutionsgroup.net",
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
            summary:"Kristyn joined Orion in 2016 as an Intern and has since grown into a Professional Recruiter. Her knowledge of HR and skill with social media helps her find qualified individuals who can be successful in our clients’ environments. She plays a vital role in our fast ramp up process, having set up large teams in just a weeks’ time. She prides herself with making connections with candidates and helping them progress in their careers. Kristyn earned her BS in Human Resources Development from Oakland University with a Minor in Employment Systems and Standards. Kristyn is an active volunteer at the Warren Community Center where she works with special needs adults."

        },
        {
            name: 'Bill Pichan',
            role: 'Director',
            email: "bpichan@orionsolutionsgroup.net",
            image: 'bill_profile.jpeg',
            height: '340px',
            linkedIn: 'https://www.linkedin.com/in/bill-pichan-202b151/',
            summary:"Bill brings more than 25 years of experience delivering professional services to various industries.  Bill provides business development and project leadership services for Orion.  Bill earned his BBA from the University of Michigan-Dearborn and his CPA certification at one of the Big 4 firms.  Prior to Orion, Bill worked in the professional services industry and was the global account manager for one of the automotive OEMs.  Earlier in his career, Bill also worked with several automotive suppliers in management roles."

        },
        {
            name: 'Zulaikha Khan',
            role: 'Professional Recruiter',
            email: "zkhan@orionsolutionsgroup.net",
            image: 'zulaikha_profile.jpeg',
            height: '340px',
            linkedIn: 'https://www.linkedin.com/in/zulaikhakhan/',
            summary:"Zulaikha (“Zuli”) joined Orion as an intern and she did such a great job that we added her to the team in 2018 as a Professional Recruiter.  Her knowledge of HR and skills with social media help her find qualified individuals who can be successful in our clients’ environments. Zuli also prides herself on managing Orion’s social media. She tries to connect with candidates and motivate them to progress in their careers. Zuli earned her BS in Human Resources Development from Oakland University."

        },
        {
            name: 'Bob',
            role: '',
            email: '',
            image: 'bob_profile.jpeg',
            height: '340px',
            linkedIn: '',
            summary:"Bob The Dog joined the Orion team in 2017, coming to us from a local rescue shelter.  Bob The Dog has excellent people skills and spends most of his day visiting with the rest of team (particularly if they are eating something)."
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
