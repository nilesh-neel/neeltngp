import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { AuthenticationService } from './_services';
import { User } from './_models';
declare var $: any;

@Component({ selector: 'app', templateUrl: 'app.component.html' })
export class AppComponent {
  currentUser: User;
  status: boolean = false;

  constructor(
    private router: Router,
    private authenticationService: AuthenticationService
  ) {
    this.authenticationService.currentUser.subscribe(x => this.currentUser = x);
  }

  toggelSideBar(event) {
    event.preventDefault();
     this.status = !this.status;
  }

  logout() {
    this.authenticationService.logout();
    this.router.navigate(['/login']);
  }
}
