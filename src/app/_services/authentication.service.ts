import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map'
import {_URL} from "../_models/urls";

@Injectable()
export class AuthenticationService {
    constructor(private http: Http) { }

    config:any = {headers:{ 'Content-Type': 'application/json'}};

    login(email: string, password: string) {
        return this.http.post(_URL + '/user/authenticate', JSON.stringify({ email: email, password: password }), this.config)
            .map((response: Response) => {
                // login successful if there's a jwt token in the response
                // console.log("success: ", response);
                // let user = response.json();
                // if (user && user.token) {
                //     // store user details and jwt token in local storage to keep user logged in between page refreshes
                //     localStorage.setItem('currentUser', JSON.stringify(user));
                // }
                // return user;
            });
    }

    logout() {
        // remove user from local storage to log user out
        localStorage.removeItem('currentUser');
    }
}
