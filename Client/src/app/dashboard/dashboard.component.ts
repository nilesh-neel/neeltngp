import { Component } from '@angular/core';
import { Router } from '@angular/router';


@Component({ templateUrl: 'dashboard.component.html' })
export class DashboardComponent {
  loading = false;

  /**
   *
   */
  constructor(private router: Router,) {

  }

  registerUser() {
    this.router.navigateByUrl('/registration');
  }

}
