"use strict";
import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {BullhornService} from "../_services/index";
import {Router} from '@angular/router';
import {AlertService} from '../_services/index';
import {data_retrieved, job_data} from "../jobs/jobs.component";
import { Job } from "../_models/index";



@Component({
    moduleId: module.id,
    providers: [BullhornService],
    templateUrl: 'job_description.component.html',
    styleUrls: ['job_description.component.css']
})


export class JobDescriptionComponent implements OnInit {
    public description: string;
    hostUrl = window.parent.location.host;
    loading = false;
    loader = false;
    job_data: any;
    title: string;
    employmentType: string;
    address: string;
    category: string;
    location: string;
    job_id:number = this.getJobId();

    constructor(private bullhornService: BullhornService,
                private router: Router,
                private alertService: AlertService) {
    }

    ngOnInit() {
        if(!data_retrieved){
            this.formatBullhornData();
        }else{
            this.loader = true;
            this.job_data = job_data;
            this.getJobDescription(this.job_id);
        }
    }



    formatBullhornData(){
        this.bullhornService.getJobs(null).then(
            (res: any) => {
                // console.log("res: ", JSON.parse(res._body));
                let jobs = JSON.parse(res._body);
                let jd = jobs.data;
                for (let i = 0; i < jd.length; i++) {
                    job_data.push({
                            id: jd[i].id,
                            job: new Job(
                                jd[i].id,
                                jd[i].title,
                                jd[i].publicDescription,
                                jd[i].employmentType,
                                jd[i].publicDescription.substring(0, 375) + "...",
                                jd[i].address.city + ", " + jd[i].address.state,
                                jd[i].address,
                                jd[i].categories.data[0] ? jd[i].categories.data[0].name : ''
                            )
                        }
                    )
                }
                this.loader = true;
                this.job_data = job_data;
                this.getJobDescription(this.job_id)
            }
        );
    }

    public getJobDescription(id:any){
        for(let i = 0;i <job_data.length; i++){
            if(job_data[i].id == [id]){
                this.description = job_data[i].job.description;
                this.employmentType = job_data[i].job.employmentType;
                this.address = job_data[i].job.address;
                this.category = job_data[i].job.category;
                this.title = job_data[i].job.title;
                this.location = job_data[i].job.location;
                return this.description;
            }
        }
    }

    public getJobId() {
        let url: string = window.location.href;
        let id: Array<any> = url.split('/');
        return id[id.length-1];
    }


}
