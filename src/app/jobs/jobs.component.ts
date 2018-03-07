import { Component, OnInit, ViewEncapsulation, OnChanges } from '@angular/core';
import {BullhornService} from "../_services/index";
import {Router} from '@angular/router';
import { Job } from "../_models/index";
// import {data_retrieved} from "../job_description/job_description.component";


export let data_retrieved = false;
export let job_data: any = [];

@Component({
    moduleId: module.id,
    templateUrl: 'jobs.component.html',
    styleUrls: ['jobs.component.css'],
    encapsulation: ViewEncapsulation.None,

})

export class JobsComponent {
    constructor(private bullhornService: BullhornService,
                private router: Router) {
    }

    public job_data: any;
    selected_category: string;
    selected_location: string;
    categories: Array<string> = [];
    locations: Array<string> = [];
    loading: boolean = false;
    loader: boolean = false;
    query:string;


    ngOnInit() {

        if (!data_retrieved) {
            this.formatBullhornData();
        } else {
            this.loader = true;
            this.job_data = job_data;
            this.createCategoriesAndLocations(job_data);
        }
    }

    onChange(category: string) {
        // console.log("selected category: ", category)
    }


    formatBullhornData() {

        this.bullhornService.getJobs(null).then(
            (res: any) => {
                let jobs = JSON.parse(res._body)
                let jd = jobs.data
                let d
                for (let i = 0; i < jd.length; i++) {
                    d = jd[i].publicDescription.replace(/&nbsp;/gi,'')
                    d = d.substring(0, 520) + "...",
                    job_data.push({
                            id: jd[i].id,
                            job: new Job(
                                jd[i].id,
                                jd[i].title,
                                jd[i].publicDescription,
                                jd[i].employmentType,
                                d,
                                jd[i].address.city + ", " + jd[i].address.state,
                                jd[i].address,
                                jd[i].categories.data[0] ? jd[i].categories.data[0].name : ''
                            )
                        }
                    );

                }
                this.createCategoriesAndLocations(job_data);
                // console.log("JOBS: ", job_data);
                this.loader = true;
            }
        );
        data_retrieved = true;
        this.job_data = job_data;
    }

    createCategoriesAndLocations(job_data: Array<any>) {
        this.categories.push("Category");
        this.locations.push("Location");
        for (let i = 0; i < job_data.length; i++) {
            if(job_data[i].job.category){
                //only push into array if it does not already exist in array
                if ((this.categories).indexOf(job_data[i].job.category) == -1) {
                    this.categories.push(job_data[i].job.category)
                }
                if ((this.locations).indexOf(job_data[i].job.location) == -1) {
                    this.locations.push(job_data[i].job.location)
                }
            }
        }
    }

    public searchStringInJobsArray() {
        // console.log("Search");
        if(!this.query){ this.job_data = job_data;  return;}
        let new_job_data: Array<string>=[];
        let query:any = [];
            query = this.query.split(" ");
        if(query.length <= 1) query.push(this.query);
        for (let j = 0; j < job_data.length; j++) {
                for(let i = 0; i < query.length; i++)
                    if (job_data[j].job.description.toLocaleLowerCase().match(query[i].toLocaleLowerCase())
                        || job_data[j].job.title.toLocaleLowerCase() == query[i].toLocaleLowerCase())
                    {
                        new_job_data.push(job_data[j]);
                        break;
                    }
        }
        if(!new_job_data.length) {
          // console.log("No match for: " , this.query);
        }
        this.job_data = new_job_data;
        return -1;
    }

}
