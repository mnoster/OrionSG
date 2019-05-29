import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { _URL } from "../_models/urls";
import 'rxjs/add/operator/toPromise';

@Injectable()

export class BullhornService {
    constructor(private http: Http) { }
    boundaryKey = Math.random().toString(16); // random string
    config: any = { headers: { 'Content-Type': 'application/json' } };

    parseResume(resume: any) {
        let promise = new Promise((resolve, reject) => {
            this.http.post(_URL + "/bhorn/parse_resume", { resume }, this.config)
                .toPromise()
                .then(
                    (res) => {
                        resolve(res);
                    }
                )
        })
        return promise
    }

    attachResume(resume: any, candidate_id: any, file_type: string) {
        let promise = new Promise((resolve, reject) => {
            this.http.post(_URL + "/bhorn/attach_resume", { resume, candidate_id, file_type }, this.config)
                .toPromise()
                .then(
                    (res) => {
                        resolve(res);
                    }
                );
        });
        return promise
    }

    getJobs(id: string) {
        if (id) return this.getJobById(id);
        else return this.getAllJobs();
    }

    //not being used currently
    getJobById(id: string) {
        let promise = new Promise((resolve, reject) => {
            this.http.post(_URL + "/bhorn/jobs/id", JSON.stringify({ job_id: id }), this.config)
                .toPromise()
                .then(
                    (res) => {
                        resolve(res);
                    }
                );
        });
        return promise;
    }

    getAllJobs() {
        let promise = new Promise((resolve, reject) => {
            this.http.get(_URL + "/bhorn/jobs", this.config)
                .toPromise()
                .then(
                    (res) => {
                        resolve(res);
                    }
                );
        });
        return promise;
    }

    searchCategory(category: string) {
        console.log("search category")
        let promise = new Promise((resolve, reject) => {
            this.http.post(_URL + "/bhorn/search_category", JSON.stringify({ category: encodeURIComponent(category) }), this.config)
                .toPromise()
                .then(
                    (res) => {
                        resolve(res);
                    }
                );
        });
        return promise;
    }
    
    searchString(search_query: string) {
        console.log("search string")
        let promise = new Promise((resolve, reject) => {
            this.http.post(_URL + "/bhorn/search_string", JSON.stringify({ search_query: encodeURIComponent(search_query) }), this.config)
                .toPromise()
                .then(
                    (res) => {
                        resolve(res);
                    }
                );
        });
        return promise;
    }

    submitResume() {
        return this.http.post(_URL + "/bhorn", this.config);
    }

    createCandidate(data: any) {
        let promise = new Promise((resolve, reject) => {
            this.http.put(_URL + "/bhorn/create_candidate", JSON.stringify(data), this.config)
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