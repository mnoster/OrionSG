import { Component, OnInit, ViewEncapsulation, OnChanges } from '@angular/core';
import { BullhornService } from "../_services/index";
import { Router } from '@angular/router';
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

    public job_data: any = []
    selected_category: string
    selected_location: string
    categories: Array<string> = []
    locations: Array<string> = []
    loading: boolean = false
    loader: boolean = false
    query: string


    ngOnInit() {
        if (!data_retrieved) {
            this.formatBullhornData()
        } else {
            this.loader = true
            this.job_data = job_data
            this.createCategoriesAndLocations(job_data);
        }
    }

    public setCategory(category: string) {
        this.selected_category = category;
    }

    public setLocation(location: string) {
        this.selected_location = location;
    }

    searchCategory(category: string) {
        return new Promise((resolve, reject) => {
            this.bullhornService.searchCategory(category).then(
                (res: any) => {
                    resolve(this.setJobs(res, false))
                    // this.job_data = this.setJobs(res, false)
                }
            );
        })
    }

    searchString(query: string) {
        // console.log("Search String: ", query)
        return new Promise((resolve, reject) => {

            this.bullhornService.searchString(query).then(
                (res: any) => {
                    resolve(this.setJobs(res, false))
                }
            );
        })
    }

    // Logic not ideal, but it is functional given the limited Bullhorn API 
    public async searchJobs() {
        if (!this.query && this.selected_category && !this.selected_location) {
            await this.searchCategory(this.selected_category);
            return;
        }
        if (this.query && this.selected_category && this.selected_location) {
            this.searchCategory(this.selected_category).then(() => {
                this.job_data = this.searchStringInJobsArray(this.query);
                this.job_data = this.searchStringInJobsArray(this.selected_location);
            })
            return;
        }
        if (this.query && this.selected_category) {
            this.searchCategory(this.selected_category).then(() => {
                this.job_data = this.searchStringInJobsArray(this.query);
            })
            return;
        }
        if (this.query && this.selected_location) {
            this.searchString(this.query).then(() => {
                this.job_data = this.searchStringInJobsArray(this.selected_location);
            })
            return;
        }
        if (this.query && !this.selected_category && !this.selected_location) {
            await this.searchString(this.query)
            return;
        }
        if (!this.query && this.selected_category && this.selected_location) {
            this.searchCategory(this.selected_category).then(()=>{
                this.job_data = this.searchStringInJobsArray(this.selected_location);
            })
            return;
        }
        if (!this.query && !this.selected_category && this.selected_location) {
            this.job_data = this.searchStringInJobsArray(this.selected_location);
            return;
        }
    }

    setJobs(res: any, setDropdowns: boolean) {
        job_data = [];
        let jobs = JSON.parse(res._body);
        let jd = jobs.data;
        let d;
        for (let i = 0; i < jd.length; i++) {
            d = jd[i].publicDescription.replace(/&nbsp;/gi, '')
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
                });
        }
        if (setDropdowns) {
            this.createCategoriesAndLocations(job_data);
        }
        this.loader = true;
        data_retrieved = true;
        this.job_data = job_data;
        return this.job_data
    }

    formatBullhornData() {
        this.bullhornService.getJobs(null).then(
            (res: any) => {
                this.setJobs(res, true)
            }
        );
    }

    createCategoriesAndLocations(job_data: Array<any>) {
        // this.categories.push("Category");
        // this.locations.push("Location");
        for (let i = 0; i < job_data.length; i++) {
            if (job_data[i].job.category) {
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

    resetJobs() {
        this.loader = true;
        this.setCategory("");
        this.setLocation("");
        this.query = "";
        this.createCategoriesAndLocations(job_data);
        this.formatBullhornData();
    }

    public searchStringInJobsArray(search_query: string) {
        try {
            if (!search_query) { this.job_data = job_data; return; }
            let new_job_data: Array<string> = [];
            let query: any = [];
            query = search_query.replace(",", "").split(" ");
            if (query.length <= 1) query.push(search_query);
            for (let j = 0; j < job_data.length; j++) {
                for (let i = 0; i < query.length; i++)
                    if (job_data[j].job.description.toLocaleLowerCase().match(query[i].toLocaleLowerCase())
                        || job_data[j].job.title.toLocaleLowerCase() == query[i].toLocaleLowerCase()
                        || job_data[j].job.location.toLocaleLowerCase().match(query[i].toLocaleLowerCase())) {
                        new_job_data.push(job_data[j]);
                        break;
                    }
            }
            if (!new_job_data.length) {
                // console.log("No match for: ", search_query);
                this.job_data = [];
            } else {
                this.job_data = new_job_data;
            }
            return this.job_data;
        } catch (error) {
            console.log("Error Searching For Job: ", error)
        }
    }
}
