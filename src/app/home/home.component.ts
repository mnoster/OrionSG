import { Component, OnInit } from '@angular/core';
// import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';
import { Router } from '@angular/router';
import { User } from '../_models/index';
import { UserService, ContentService } from '../_services/index';


@Component({
    moduleId: module.id,
    templateUrl: 'home.component.html',
    styleUrls: ['home.component.css', '../app.component.css']
})

export class HomeComponent implements OnInit {
    currentUser: User;
    loading: boolean = false;
    users: User[] = [];
    page_type:string;
    orion_mission: String = "Orion Solutions Group exists to provide clients "
                          + "with an outstanding experience for all their human "
                          + "capital needs – project delivery, contract staffing "
                          + "and professional recruiting. Clients and Candidates "
                          + "work with us because of our unrelenting commitment "
                          + "to their success.";

    // constructor(private userService: UserService, private route: ActivatedRoute, private router: Router) {
    constructor(
        // private userService: UserService, 
        // private  contentService:ContentService
        ) {
        //this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
    }

    onAnchorClick ( ) {
      // console.log("On anchor click");
    }

    ngOnInit() {
        // this.getContent();
    }

    // getContent(){
    //     this.loading = true;
    //     this.page_type = "Home";
    //     this.contentService.getContent(this.page_type)
    //         .subscribe(
    //             data => {
    //                 // console.log("Content: ", data)
    //             },
    //             error => {
    //                 // console.log("Content  Error: " , error);
    //                 this.loading = false;
    //             });
    // }

    deleteUser(id: number) {
        //this.userService.delete(id).subscribe(() => { this.loadAllUsers() });
    }

    private loadAllUsers() {
        //this.userService.getAll().subscribe(users => { this.users = users; });
    }
}
