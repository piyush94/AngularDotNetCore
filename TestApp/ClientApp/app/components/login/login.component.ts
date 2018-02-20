import { Component, Inject } from '@angular/core';
import { Http } from '@angular/http';
import { Router } from '@angular/router';

import { LoginService } from '../../login.service';
import { User } from '../../../models/user.model';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html'
})
/** login component*/
export class LoginComponent {
    /** login ctor */

    user = new User(0, '', '');
    login_error = "";

    constructor(public loginservice: LoginService, public http: Http, @Inject('BASE_URL') public baseUrl: string, public router: Router) {

    }

    public login(router: Router) {
        let that = this;
        this.loginservice.login(that.user).then(function (result) {
            if (result)
                that.router.navigate(["/home"]);
            else {
                that.login_error = "wrong username or password";
            }
        },
            function () {
                that.login_error = "wrong username or password";
            });
    }

}