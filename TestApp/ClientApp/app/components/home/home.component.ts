import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { LoginService } from '../../login.service';

@Component({
    selector: 'home',
    templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {
    
    constructor(public router: Router, public loginService: LoginService) {}

    ngOnInit(): void {
        if (!this.loginService.isLoggedIn()) {
            this.router.navigate(['/login']);
        }
    }
    
}
