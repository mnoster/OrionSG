import {Injectable} from '@angular/core';
import {Http, Headers, RequestOptions, Response} from '@angular/http';
import {_URL} from "../_models/urls";


@Injectable()
export class ContentService {
    constructor(private http:Http) {
    }

    config:any = {headers:{ 'Content-Type': 'application/json'}};

    getContent(page_type:string) {
        console.log("PAGE TyPE: ", page_type);
        return this.http.post(_URL + '/content/get', JSON.stringify({page:page_type}),this.config).map((response:Response) => response.json());
    }

    updateContent(content:{}) {
        return this.http.put(_URL + '/content/update', JSON.stringify(content), this.jwt()).map((response:Response) => response.json());
    }

    // private helper methods

    private jwt() {
        // create authorization header with jwt token
        let currentUser = JSON.parse(localStorage.getItem('currentUser'));
        if (currentUser && currentUser.token) {
            let headers = new Headers({'Authorization': 'Bearer ' + currentUser.token});
            return new RequestOptions({headers: headers});
        }
    }
}