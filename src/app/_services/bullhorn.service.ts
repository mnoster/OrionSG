import {Injectable} from '@angular/core';
import {Http, Headers, RequestOptions, Response} from '@angular/http';
import {DEV_URL} from "../_models/urls";
import 'rxjs/add/operator/toPromise';

@Injectable()

export class BullhornService {
    constructor(private http:Http) {}
    boundaryKey = Math.random().toString(16); // random string
    config:any = {headers:{ 'Content-Type': 'application/json'}};

    parseResume(resume:any) {
        let promise = new Promise((resolve, reject) => {
            this.http.post(DEV_URL + "/bhorn/parse_resume", {resume}, this.config )
                .toPromise()
                .then(
                    (res) => {
                        resolve(res);
                    }
                );
        });
        return promise;
    }

    attachResume(resume:any, candidate_id:any) {
        let promise = new Promise((resolve, reject) => {
            this.http.post(DEV_URL + "/bhorn/attach_resume", { resume , candidate_id }, this.config )
                .toPromise()
                .then(
                    (res) => {
                        resolve(res);
                    }
                );
        });
        return promise;
    }

    getJobs(id:string) {
        if(id) return this.getJobById(id);
        else return this.getAllJobs();
    }

    //not being used currently
    getJobById(id:string){
        let promise = new Promise((resolve, reject) => {
            this.http.post(DEV_URL + "/bhorn/jobs/id", JSON.stringify({job_id:id}) ,this.config)
                .toPromise()
                .then(
                    (res) => {
                        resolve(res);
                    }
                );
        });
        return promise;
    }

    getAllJobs(){
        let promise = new Promise((resolve, reject) => {
            this.http.get(DEV_URL + "/bhorn/jobs", this.config)
                .toPromise()
                .then(
                    (res) => {
                        resolve(res);
                    }
                );
        });
        return promise;
    }

    submitResume(){
        return this.http.post(DEV_URL + "/bhorn", this.config);
    }

    createCandidate(data:any){
        let promise = new Promise((resolve, reject) => {
            this.http.put(DEV_URL + "/bhorn/create_candidate", JSON.stringify(data), this.config)
                .toPromise()
                .then(
                    (res) => {
                        resolve(res);
                    }
                );
        });
        return promise;
    }
}