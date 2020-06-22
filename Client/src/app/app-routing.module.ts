import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home';
import { LoginComponent } from './login';
import { AuthGuard } from './_helpers';
import { DashboardComponent } from './dashboard';
import { RegistrationComponent } from './register';
import { SiteLayoutComponent } from './_layout/site-layout/site-layout.component';
import { AppLayoutComponent } from './_layout/app-layout/app-layout.component';

const routes: Routes = [

  //Site routes goes here
  {
    path: '',
    component: SiteLayoutComponent,
    children: [
      { path: '', component: DashboardComponent, pathMatch: 'full' },
      // { path: 'about', component: AboutComponent },
      // { path: 'test/:id', component: AboutComponent }
    ]
  },

  // App routes goes here here
  {
    path: '',
    component: AppLayoutComponent,
    children: [
      { path: 'register', component: RegistrationComponent },
      { path: 'login', component: LoginComponent }

    ]
  },

  { path: 'home', component: HomeComponent, canActivate: [AuthGuard] },

  { path: '', component: DashboardComponent },
  // otherwise redirect to home
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
