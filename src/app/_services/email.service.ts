import {Injectable} from '@angular/core';
import {Http, Headers, RequestOptions, Response} from '@angular/http';
import {DEV_URL} from "../_models/urls";
import 'rxjs/add/operator/toPromise';

@Injectable()

export class EmailService {
    constructor(private http:Http) {}
    config:any = {headers:{ 'Content-Type': 'application/json'}};

    emailApplicant(email: string, job_title: string, url: string) {
        let promise = new Promise((resolve, reject) => {
            this.http.post(DEV_URL + "/email", {email, job_title, url}, this.config)
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