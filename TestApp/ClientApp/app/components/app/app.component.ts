import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { LoginService } from '../../login.service';


@Component({
    selector: 'app',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

    //isLoggedIn = false;

    constructor(public router: Router, public loginService: LoginService) { }

    ngOnInit(): void {
        this.loginService.redirectIfNotLoggedIn();
    }
}
