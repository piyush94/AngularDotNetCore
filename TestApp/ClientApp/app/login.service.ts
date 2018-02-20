import { Injectable, Component, Inject } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Location } from '@angular/common';
import { Router } from '@angular/router';
import 'rxjs/add/operator/toPromise';


import { User } from '../models/user.model';

@Injectable()
export class LoginService {

    //this.login = login;

    constructor(public http: Http, public location: Location, @Inject('BASE_URL') public baseUrl: string, public router: Router) {

    }

    public login(credentials: User): Promise<boolean> {
        return this.http.post(this.baseUrl + "api/login/", credentials)
            .toPromise()
            .then((response) => {
                localStorage.setItem("currentuser", JSON.stringify(response.json()))
                return true;
            })
            .catch((error) => {
                console.log(error)
                return false;
            });
    }

    public isLoggedIn() {
        return !!localStorage.getItem("currentuser");
    }

    public logout() {
        localStorage.removeItem("currentuser");
    }

    public redirectIfNotLoggedIn() {
        if (!this.isLoggedIn()) {
            this.router.navigate(['/login']);
        }
    }
}