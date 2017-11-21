import {Injectable} from '@angular/core';
import {Http, Headers, RequestOptions, Response} from '@angular/http';
import {DEV_URL} from "../_models/urls";
import {User} from '../_models/index';

@Injectable()
export class UserService {
    constructor(private http:Http) {
    }

    config:any = {headers:{ 'Content-Type': 'application/json'}};

    getAll() {
        return this.http.get(DEV_URL + '/user/get', this.jwt()).map((response:Response) => response.json());
    }

    authenticate(id:number) {
        return this.http.post(DEV_URL + '/user/authenticate' + id, this.jwt()).map((response:Response) => response.json());
    }

    create(user:User) {
        console.log("user call:", user);
        return this.http.post(DEV_URL + '/user/create', JSON.stringify(user), this.config);
    }

    update(user:User) {
        return this.http.put(DEV_URL + '/user/update', user, this.jwt()).map((response:Response) => response.json());
    }

    delete(id:number) {
        return this.http.delete(DEV_URL + '/user/delete' + id, this.jwt()).map((response:Response) => response.json());
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